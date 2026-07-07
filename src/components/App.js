import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './Main/Main';
import Blog from './Blog/Blog';
import EmailOtpCognitoDebug from './Blog/posts/EmailOtpCognitoDebug';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/blog/email-otp-cognito-debug">
          <EmailOtpCognitoDebug />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route>
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
