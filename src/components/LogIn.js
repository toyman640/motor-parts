import React from 'react';

const Login = () => (
  <section>
    <form className="login-form">
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
  </section>
);

export default Login;
