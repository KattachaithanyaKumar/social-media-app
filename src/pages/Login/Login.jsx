import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Project Social.</h1>
          <p>
            the perfect platform to connect with others and share your thoughts,
            ideas, and experiences with the world.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <form>
            <h1>Login</h1>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
