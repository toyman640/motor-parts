import React from 'react';

const Login = () => (
  <section className="LoginPage">
    <div>
      <h2>
        Login Page
      </h2>
    </div>
    <form className="LoginForm">
      <label htmlFor="username">
        Username:
        <input type="text" name="username" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="username" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <div />
  </section>
);

export default Login;
