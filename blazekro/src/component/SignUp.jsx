import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styleComponent/Signup.css";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setformData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.Name || !formData.email || !formData.password) {
      return setErrorMessage("All feilds are required");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("http://localhost:8001/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res);
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
      setformData({});
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="center-container">
      <div className="container">
        <div className="heading">Sign Up</div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Name</label>
            <input type="text" id="Name" onChange={handleChange} />
          </div>
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
              {loading ? (
                <>
                  <span className="loading">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="singinbox">
          <span>Have an account?</span>
          <Link to="/signin" className="link">
            Sign In
          </Link>
          <div className="errorMessage">{errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
