import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styleComponent/Signup.css";
import { useSingindataMutation } from "../redux/api";

const SignIn = () => {
  const [postsigin,{isLoading}] = useSingindataMutation("")
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setformData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postsigin(formData);
      if(response.error){
        console.log("eror from backend ", response.error);
        setErrorMessage(response.error.message || 'error occured')
      }
      else{
        navigate("/")
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("un expected error occured")
    }
    }

  return (
    <div className="center-container">
      <div className="container">
        <div className="heading">Sign In</div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email</label>
            <input type="email" id="email" onChange={handleChange} /> 
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="button_container">
            <button type="submit" className="submitbtn">
              {isLoading ? (
                <>
                  <span className="loading">Loading...</span>
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>
        <div className="singinbox">
          <span>Have an account?</span>
          <Link to="/signup" className="link">
            Sign Up
          </Link>
          <div className="errorMessage">{errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
