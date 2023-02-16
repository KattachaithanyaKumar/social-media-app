import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <form>
            <h1>Register</h1>
            <input type="text" placeholder="User Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Full Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Project Social.</h1>
          <p>
            the perfect platform to connect with others and share your thoughts,
            ideas, and experiences with the world.
          </p>
          <span>Already have an account?</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
