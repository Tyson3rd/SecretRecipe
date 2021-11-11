import React from "react";
import LoginForm from "../component/LoginForm";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("confirm these details exist in backend");
    console.table({ email, password });
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center text-light">
        <h1>Login</h1>
      </div>
      <div className="container">
        <div className="login row">
          <div className="col-6 offset-md-3">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};
