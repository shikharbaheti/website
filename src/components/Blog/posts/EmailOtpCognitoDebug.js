import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './EmailOtpCognitoDebug.css';

function EmailOtpCognitoDebug() {
  return (
    <div className="blog-post">
      <Container>
        <Link to="/blog" className="back-link">&larr; Blog</Link>

        <h1>The Two-Bug EMAIL_OTP Debugging Saga</h1>
        <div className="post-meta">
          <span>July 6, 2026</span>
          <span>12 min read</span>
        </div>

        <p>
          For three days, every passwordless login on our platform returned <code>CodeMismatchException</code>.
          The error message was maddeningly vague: <em>"Invalid code or auth state for the user."</em>
          We suspected Cognito had a service-side bug. We wrote up an AWS support case.
          We were wrong.
        </p>

        <p>
          The real cause was <strong>two independent bugs</strong> in our own code, whose symptoms
          perfectly overlapped to masquerade as a cloud service failure. Here's the full story.
        </p>

        <h2>The Setup</h2>

        <p>
          Titans of Investing uses an email-OTP (passwordless) login flow built on Amazon Cognito's
          native <code>USER_AUTH</code> flow:
        </p>

        <ol>
          <li>User enters their email on the login page</li>
          <li>Frontend calls <code>signIn(&#123; authFlowType: 'USER_AUTH', preferredChallenge: 'EMAIL_OTP' &#125;)</code></li>
          <li>Cognito generates an 8-digit code and fires the <code>CustomMessage_Authentication</code> Lambda trigger</li>
          <li>Our Lambda builds a branded HTML email (Titans logo, styled code block) and returns it inline</li>
          <li>Cognito delivers the email via SES</li>
          <li>User enters the code &rarr; <code>confirmSignIn</code> &rarr; tokens issued</li>
        </ol>

        <p>We also had a DynamoDB-based rate limiter in the Lambda to prevent abuse &mdash; 30 seconds between code requests per email.</p>

        <div className="callout callout-insight">
          <strong>Key fact we'd learn later:</strong> Cognito EMAIL_OTP codes are <strong>8 digits</strong>, not 6. This wasn't documented anywhere obvious, and every tutorial, example, and UI pattern we'd seen used 6-digit codes.
        </div>

        <h2>The Symptom</h2>

        <p>
          Suddenly, 100% of EMAIL_OTP login attempts failed. Users would sign up, receive their
          confirmation code (which worked), then immediately get locked out on their first login attempt.
        </p>

        <table>
          <thead>
            <tr>
              <th>Time (UTC)</th>
              <th>Environment</th>
              <th>Browser</th>
              <th>Error</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2026-07-06 02:01</td><td>BETA</td><td>Chrome 149 (Mac)</td><td>CodeMismatchException</td></tr>
            <tr><td>2026-07-06 04:25</td><td>BETA</td><td>Safari 26.5 (Mac)</td><td>CodeMismatchException</td></tr>
            <tr><td>2026-07-06 05:40</td><td>BETA</td><td>Firefox 152 (Mac)</td><td>CodeMismatchException</td></tr>
            <tr><td>2026-07-06 07:04</td><td>BETA</td><td>Firefox 152 (Mac)</td><td>CodeMismatchException</td></tr>
            <tr><td>2026-07-06 08:30</td><td>BETA</td><td>Safari 26.5 (iPhone)</td><td>CodeMismatchException</td></tr>
            <tr><td>2026-07-06 15:17</td><td>PROD</td><td>Firefox 152 (Mac)</td><td>CodeMismatchException</td></tr>
            <tr><td>2026-07-07 01:24</td><td>PROD</td><td>Firefox 152 (Mac)</td><td>CodeMismatchException</td></tr>
          </tbody>
        </table>

        <p>
          Every user. Every browser. Every device. Both BETA and PROD. <strong>Zero successful EMAIL_OTP logins.</strong>
        </p>

        <p>CloudTrail confirmed every <code>RespondToAuthChallenge</code> call was failing:</p>

        <pre><code>{`{
  "eventName": "RespondToAuthChallenge",
  "errorCode": "CodeMismatchException",
  "errorMessage": "Invalid code or auth state for the user.",
  "requestParameters": {
    "challengeName": "EMAIL_OTP"
  }
}`}</code></pre>

        <p>
          Crucially, <code>ConfirmSignUp</code> still worked &mdash; sign-up code validation was fine.
          Only the login code validation was broken.
        </p>

        <h2>The Red Herrings</h2>

        <p>
          We had just migrated from <code>CustomMessage</code> to <code>CustomEmailSender</code> trigger
          (moving from inline HTML email generation to SES-templated emails with KMS-encrypted codes).
          This became suspect #1.
        </p>

        <h3>What we investigated and ruled out</h3>

        <table>
          <thead>
            <tr>
              <th>Hypothesis</th>
              <th>Investigation</th>
              <th>Verdict</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>KMS decryption failing</td><td>Lambda logs showed decrypted code as clean 8-digit ASCII</td><td>&#10003; Ruled out</td></tr>
            <tr><td>IAM permissions</td><td>Verified <code>kms:Decrypt</code>, <code>ses:SendTemplatedEmail</code>, <code>dynamodb:*</code> all deployed</td><td>&#10003; Ruled out</td></tr>
            <tr><td>Code encoding bugs</td><td>Inspected each character code: <code>[54, 56, 51, 50, 57, 51, 57, 57]</code> = "68329399"</td><td>&#10003; Ruled out</td></tr>
            <tr><td>MFA interference</td><td>MFA was not enabled</td><td>&#10003; Ruled out</td></tr>
            <tr><td>Token lifetimes</td><td>Standard 15-minute access/ID, 7-day refresh</td><td>&#10003; Ruled out</td></tr>
            <tr><td><code>authSessionValidity</code></td><td>Was temporarily 10 min; reverted to default 3 min</td><td>&#10003; Ruled out</td></tr>
            <tr><td>Code-link vs manual entry</td><td>Both delivery methods failed identically</td><td>&#10003; Ruled out</td></tr>
            <tr><td>Rate limiting</td><td>Rate limiter code looked correct at first glance...</td><td>&#10007; <strong>ROOT CAUSE 1</strong></td></tr>
          </tbody>
        </table>

        <p>
          We reverted <code>CustomEmailSender</code> back to <code>CustomMessage</code> &mdash; the issue persisted.
          The migration was a red herring; the bug existed before it but was masked during testing.
        </p>

        <h2>The CLI Proof: Cognito Works</h2>

        <p>
          Here's what broke the case open. We bypassed Amplify entirely and called Cognito's API directly:
        </p>

        <pre><code>{`# Step 1: Request an EMAIL_OTP code
aws cognito-idp initiate-auth \\
  --auth-flow USER_AUTH \\
  --client-id <app-client-id> \\
  --auth-parameters '{"USERNAME":"user@example.com","PREFERRED_CHALLENGE":"EMAIL_OTP"}'

# → Response: { Session: "AYA...", ChallengeName: "EMAIL_OTP" }
# → Code sent via email: 89946105

# Step 2: Enter the code
aws cognito-idp respond-to-auth-challenge \\
  --client-id <app-client-id> \\
  --challenge-name EMAIL_OTP \\
  --session "<session-from-step-1>" \\
  --challenge-responses '{"USERNAME":"user@example.com","EMAIL_OTP_CODE":"89946105"}'

# → AuthenticationResult: { AccessToken, RefreshToken, IdToken }
# → SUCCESS`}</code></pre>

        <p>
          <strong>Cognito was innocent.</strong> The same user pool, same client, same code &mdash;
          it worked perfectly when Amplify was out of the picture.
        </p>

        <div className="callout callout-insight">
          <strong>Lesson:</strong> When debugging cloud service issues, bypass your SDK and test the API directly.
          Amplify is a thick client with its own session management, retry logic, and state machine.
          It can &mdash; and did &mdash; introduce bugs that look like service failures.
        </div>

        <h2>Root Cause #1: Rate Limiter Cross-Contamination</h2>

        <p>
          Our CustomMessage Lambda had a DynamoDB-based rate limiter that used a <strong>single sort key</strong>
          per email address:
        </p>

        <div className="callout callout-bug">
          <strong>Before (broken):</strong> Sort key = <code>AUTH_CODE#user@example.com</code>
          <br />
          Both <code>CustomMessage_SignUp</code> and <code>CustomMessage_Authentication</code> triggers
          shared the same key.
        </div>

        <p>This created a devastating race condition:</p>

        <ol>
          <li>User signs up &rarr; Cognito fires <code>CustomMessage_SignUp</code> &rarr; rate limiter writes a 30-second TTL</li>
          <li>Auto-login after sign-up kicks in &rarr; Frontend calls <code>signIn()</code> &rarr; Amplify makes <code>InitiateAuth</code> call &rarr; Cognito creates a session</li>
          <li>Cognito fires <code>CustomMessage_Authentication</code> &rarr; <strong>rate limiter blocks it</strong> (same key, TTL hasn't expired) &rarr; no email sent &rarr; exception thrown</li>
          <li>Amplify, not receiving a code, <strong>retries</strong> <code>signIn()</code> &rarr; new <code>InitiateAuth</code> &rarr; new session &rarr; this time rate limiter allows it &rarr; email sent, code received</li>
          <li>User enters code &rarr; <code>confirmSignIn()</code> &rarr; <strong>uses the stale session from step 2</strong> (Amplify didn't clean up the aborted first round-trip)</li>
          <li>Cognito: "This code doesn't match this session" &rarr; <code>CodeMismatchException</code></li>
        </ol>

        <p>The fix was simple once we understood the problem:</p>

        <div className="callout callout-fix">
          <strong>After (fixed):</strong> Sort key = <code>AUTH_CODE#user@example.com#CustomMessage_Authentication</code>
          <br />
          Each trigger source gets its own independent 30-second rate-limit window.
          SignUp cannot block Authentication anymore.
        </div>

        <pre><code>{`// Before (broken) — shared key across all trigger sources
const rateLimitSk = email;

// After (fixed) — independent keys per trigger source
const rateLimitSk = \`\${email}#\${triggerSource}\`;
// Produces: "user@example.com#CustomMessage_Authentication"
//           "user@example.com#CustomMessage_SignUp"
//           "user@example.com#CustomMessage_ResendCode"`}</code></pre>

        <h2>Root Cause #2: The Silent Code Truncation</h2>

        <p>
          We thought we were done. Rate limiter fixed, Amplify upgraded, retry logic added.
          Time to test. Same result: <code>CodeMismatchException</code>.
        </p>

        <p>
          Then we looked at the OTP input component:
        </p>

        <pre><code>{`// AuthCodeInput.tsx — the villain hiding in plain sight
<input
  type="text"
  maxLength={6}          // ← ONLY ACCEPTS 6 CHARACTERS
  onChange={(e) => {
    const val = e.target.value.replace(/\\D/g, '');
    setValue(val.slice(0, 6));  // ← SILENTLY TRUNCATES TO 6
  }}
  placeholder="Enter 6-digit code"  // ← LIES TO THE USER
/>`}</code></pre>

        <p>
          Cognito EMAIL_OTP generates <strong>8-digit codes</strong>. Every code was silently truncated
          to 6 characters. The last two digits were always dropped. Even when the Cognito session was
          perfectly valid and the user entered the exact code from the email, the input field threw away
          25% of it before submission.
        </p>

        <div className="callout callout-bug">
          <strong>Why this went undetected:</strong> We'd tested email-OTP login multiple times before and
          it worked. The reason? <em>Rate limiter cross-contamination was already failing first.</em>
          We never got far enough to discover the input truncation. The first bug masked the second.
          Once we fixed the rate limiter and could reliably receive codes, the truncation bug was
          immediately obvious &mdash; every attempt still failed.
        </div>

        <p>The fix:</p>

        <pre><code>{`// AuthCodeInput.tsx — fixed
<input
  type="text"
  maxLength={8}          // ← CORRECT: 8 characters
  onChange={(e) => {
    const val = e.target.value.replace(/\\D/g, '');
    setValue(val.slice(0, 8));  // ← CORRECT: don't truncate
  }}
  placeholder="Enter code"  // ← HONEST: no hardcoded digit count
/>`}</code></pre>

        <p>
          We also updated all instances across the app &mdash; login page, registration page,
          change-email modal, and their corresponding test files. Every placeholder that said
          "Enter 6-digit code" was changed to "Enter code" to avoid baking in assumptions.
        </p>

        <h2>The Complete Fixes</h2>

        <table>
          <thead>
            <tr>
              <th>Fix</th>
              <th>Repo</th>
              <th>What Changed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Per-trigger-source rate limit keys</td>
              <td><code>infra</code></td>
              <td>DynamoDB sort key from <code>email</code> to <code>email#triggerSource</code></td>
            </tr>
            <tr>
              <td>Amplify upgrade</td>
              <td><code>frontend</code></td>
              <td><code>aws-amplify</code> 6.16.3 &rarr; 6.18.0, plus adapter/backend/cli bumps</td>
            </tr>
            <tr>
              <td>Retry on rate-limit</td>
              <td><code>frontend</code></td>
              <td><code>loginWithOtp</code> catches "Too many requests" error, waits 2s, retries</td>
            </tr>
            <tr>
              <td>Cooldown UX</td>
              <td><code>frontend</code></td>
              <td>Countdown timer displayed on rate-limit instead of cryptic error message</td>
            </tr>
            <tr>
              <td>OTP input: 6 &rarr; 8 chars</td>
              <td><code>frontend</code></td>
              <td><code>.slice(0,6)</code> &rarr; <code>.slice(0,8)</code>, <code>maxLength=&#123;8&#125;</code></td>
            </tr>
            <tr>
              <td>Placeholder text fix</td>
              <td><code>frontend</code></td>
              <td>"Enter 6-digit code" &rarr; "Enter code" across login, register, change-email</td>
            </tr>
            <tr>
              <td>Debug code cleanup</td>
              <td>both repos</td>
              <td>Removed all <code>[auth-debug]</code> console.logs, XHR/fetch interceptors, Hub listeners</td>
            </tr>
          </tbody>
        </table>

        <h2>Architecture: Final State</h2>

        <p>
          We kept the <code>CustomMessage</code> trigger (not <code>CustomEmailSender</code>).
          The Lambda generates branded HTML emails inline with the Titans logo and a styled code block,
          and Cognito delivers them via the configured SES identity. No KMS keys, no AWS Encryption SDK
          dependency, no SES templates with placeholder variables &mdash; just inline HTML.
        </p>

        <pre><code>{`new UserPool(this, 'TOI-<stage>-UserPool', {
  featurePlan: FeaturePlan.ESSENTIALS,
  email: UserPoolEmail.withSES({ ... }),
  signInPolicy: {
    allowedFirstAuthFactors: { password: true, emailOtp: true },
  },
  lambdaTriggers: {
    customMessage: this.customMessageLambda,  // ← inline branded HTML
    preSignUp: this.preSignUpLambda,
    postConfirmation: this.postConfirmationLambda,
    postAuthentication: this.postAuthenticationLambda,
  },
});`}</code></pre>

        <h2>The Affected Resources</h2>

        <table>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>User Pool</td><td>Cognito user pool with EMAIL_OTP enabled, SES email delivery</td></tr>
            <tr><td>App Client</td><td>Frontend Amplify client, <code>USER_AUTH</code> flow enabled, 15-min access/id tokens, 7-day refresh</td></tr>
            <tr><td>Region</td><td><code>us-east-1</code></td></tr>
            <tr><td>CustomMessage Lambda</td><td>Builds branded HTML emails inline, implements per-trigger-source rate limiter</td></tr>
            <tr><td>Rate Limit Table</td><td>DynamoDB, <code>PAY_PER_REQUEST</code>, 30-second TTL per email+triggerSource</td></tr>
          </tbody>
        </table>

        <h2>Commit History</h2>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Commit</th>
              <th>Repo</th>
              <th>What</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td><code>881caaf</code></td><td>infra</td><td>Separate rate-limit keys per trigger source</td></tr>
            <tr><td>2</td><td><code>dc0c3e0</code></td><td>frontend</td><td>Amplify upgrade + retry-on-rate-limit + cooldown display</td></tr>
            <tr><td>3</td><td><code>0fabe3d</code></td><td>frontend</td><td>AuthCodeInput: 6 &rarr; 8 character OTP fix</td></tr>
            <tr><td>4</td><td><code>a699a04</code></td><td>infra</td><td>Debug code cleanup + AGENTS.md update</td></tr>
            <tr><td>5</td><td><code>5bfa6bc</code></td><td>frontend</td><td>Debug code cleanup + test placeholder updates</td></tr>
            <tr><td>6</td><td><code>71e451a</code></td><td>infra</td><td>Fix <code>authSessionValidity</code> comment</td></tr>
          </tbody>
        </table>

        <h2>Lessons Learned</h2>

        <h3>1. Trust the CLI over the SDK</h3>
        <p>
          When debugging a cloud service, eliminate your SDK/client library first.
          A 4-line bash command (<code>aws cognito-idp initiate-auth</code> + <code>respond-to-auth-challenge</code>)
          proved Cognito worked in 30 seconds, after we'd spent hours investigating IAM, KMS, and
          CloudTrail from the Amplify side.
        </p>

        <h3>2. Verify code lengths from the source of truth</h3>
        <p>
          We assumed Cognito EMAIL_OTP codes were 6 digits because every tutorial, UI library,
          and example in the ecosystem uses 6. The actual codes are 8 digits.
          Neither Cognito's console nor its documentation explicitly states this.
          The Lambda <code>codeParameter</code> field &mdash; the actual bytes Cognito sends &mdash;
          is the only reliable source.
        </p>

        <h3>3. Rate limiters need careful key design</h3>
        <p>
          A shared sort key between <code>CustomMessage_SignUp</code> and <code>CustomMessage_Authentication</code>
          seems harmless at first glance &mdash; it's the same user, same email, fair enough to rate-limit them together.
          But the triggers have fundamentally different lifecycle patterns. SignUp fires once during registration;
          Authentication fires on every login. Sharing a key creates a window where registration blocks login &mdash; and
          Amplify's session management turns that into a <code>CodeMismatchException</code> with a misleading error message.
        </p>

        <h3>4. Bugs can mask other bugs</h3>
        <p>
          The rate limiter cross-contamination masked the AuthCodeInput truncation for weeks.
          Every time we tested login during development, the rate limiter failed first.
          We never got far enough to discover the input field was silently throwing away digits.
          Fixing one bug exposed the other &mdash; which looked like a regression but was actually progress.
        </p>

        <h3>5. Error messages lie (often)</h3>
        <p>
          <code>"Invalid code or auth state for the user"</code> sounds like the code is wrong or the session
          expired. In our case, the code was correct, the session was live, and Cognito itself was working
          perfectly. The error was caused by Amplify passing a stale session token from an aborted round-trip.
          The error message described the symptom (Cognito couldn't match the code to <em>that</em> session),
          not the cause (Amplify sent the wrong session).
        </p>

        <h3>6. Write the support case, then prove yourself wrong</h3>
        <p>
          We wrote a detailed AWS support case with CloudTrail evidence, Lambda log dumps, and a step-by-step
          reproduction. The act of structuring the evidence forced us to question our assumptions.
          By the time we finished writing it, we'd found both root causes and never had to submit it.
          The support case document became a post-mortem instead.
        </p>

        <hr />

        <p>
          <em>
            This post is based on the internal post-mortem documents at
            {' '}<code>aws-support-case.md</code> and <code>aws-support-case-synopsis.md</code> in the
            Titans of Investing monorepo. All user IDs, email addresses, and session tokens have been
            anonymized or use test accounts.
          </em>
        </p>
      </Container>
    </div>
  );
}

export default EmailOtpCognitoDebug;
