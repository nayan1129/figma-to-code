import React from "react";

const Board = () => {
  return (
    <div>
      <div className="form-container">
        <div className="login-card" id="login-form">
          <h2>Sign In</h2>
          <h3>Sign in to your account</h3>
          <form className="login-form">
            <input
              type="text"
              className="control"
              id="username"
              placeholder="Username"
              required
            />
            <div className="password">
              <input
                type="password"
                className="control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="control" type="submit">
              Sign In
            </button>
          </form>
          <p className="form-p">
            Don't have an account ?<a href="#register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Board;
