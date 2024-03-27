import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { signInStart,signInSuccess,signInFailure } from "../redux/user/useraSlice";
const SignIn = () => {
  const [formData, setformData] = useState({});
  const {Loading,error} = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
    dispatch(signInSuccess(data))
      navigate('/')
   } catch (error) {
      dispatch(signInFailure(error.message))
    }
  
  };

  return (
    <div className="p-3 mx-auto max-w-lg">
      <h1 className="text-3xl text-center font-bold my-7">Sign In </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={Loading}
          className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95  disabled:opacity-80"
        >
          {Loading ? "Loading..." : "SIGN IN"}
        </button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign up</span>
        </Link>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
};

export default SignIn;
