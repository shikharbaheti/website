import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
  {
    slug: 'email-otp-cognito-debug',
    title: 'The Two-Bug EMAIL_OTP Debugging Saga: 3 Days, 2 Root Causes, 1 Phantom Cognito Bug',
    date: 'July 6, 2026',
    excerpt:
      'When every EMAIL_OTP login started failing with CodeMismatchException, we suspected Cognito. Two independent bugs — a rate limiter that contaminated Amplify sessions and an input field that silently truncated OTP codes — were the real culprits. This is the full debugging story.',
  },
];

function Blog() {
  return (
    <div className="blog-listing">
      <Container>
        <Link to="/" className="back-link">&larr; Home</Link>
        <h2>Blog</h2>
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="blog-card"
          >
            <div className="post-date">{post.date}</div>
            <div className="post-title">{post.title}</div>
            <div className="post-excerpt">{post.excerpt}</div>
          </Link>
        ))}
      </Container>
    </div>
  );
}

export default Blog;
