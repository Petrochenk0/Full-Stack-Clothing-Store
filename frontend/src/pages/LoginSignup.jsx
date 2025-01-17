import React from 'react';
import './CSS/LoginSignup.css';

export default function LoginSignup() {
  return (
    <div className="login-signup">
      <div className="container">
        <h1>Sign up</h1>
        <div className="fields">
          <input type="text" placeholder="Name: " />
          <input type="email" placeholder="Email: " />
          <input type="password" placeholder="Password: " />
        </div>
        <button>Continue</button>
        <p className="login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By creating an account, I agree to the Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}
