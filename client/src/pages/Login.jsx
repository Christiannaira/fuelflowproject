import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Links from "./Links";
import Poster from "./Poster";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");

  // useEffect(() => {
    // if (localStorage.getItem("token") !== null) {
      // window.location.href = "/";
    // }
  // }, []);

  




  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_id", data.user_id);
      alert("Log in success!");
      window.location.href = "/";
    } else {
      alert("Login failed!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    alert("Log out success!");
    window.location.href = "/";
  };



  return (
    <>
    
    <div className="container mb-5">
      <h1 className="fw-bold">Login</h1>
      <form onSubmit={handleLogin}>
        <p className="fw-bold mt-5">Email</p>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="fw-bold mt-3">Password</p>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />


        <button type="submit" className="btn btn-dark mt-3">
          Login
        </button>

        {token && (
              <button onClick={handleLogout} className="btn btn-dark mt-3">
                Logout
              </button>
            )}

        
        <Link to="/register" className="ms-3 align-middle">
          Create an account
        </Link>
      </form>
    </div>
  
  
    </>   
  );
}

export default Login;
