import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { userdata } from "../utils/dummy";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailID, setEmailID] = useState("attri2707@gmail.com");
  const [password, setPassword] = useState("1234");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        {
          emailID,
          password,
        },
        { withCredentials: true } //To set cookie in browser for token
      );
      dispatch(
        addUser({
          ...userdata,
          emailID,
          password,
        })
      );
      console.log(response);
    } catch (error) {
      dispatch(
        addUser({
          ...userdata,
          emailID,
          password,
        })
      );
      navigate("/");
      console.log("email or password is wrong", emailID, password);
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <fieldset className="fieldset w-96 bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend pt-10">Login</legend>

        <label className="fieldset-label">Email ID</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={emailID}
          onChange={(e) => {
            setEmailID(e.target.value);
          }}
        />

        <label className="fieldset-label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className="btn btn-neutral mt-4"
          onClick={handleLogin}
          disabled={!emailID || !password}
        >
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
