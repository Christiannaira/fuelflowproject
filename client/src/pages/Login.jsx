import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HandWave from '../assets/wave.png';
import Links from "./Links";

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

      <section className="account" id="account">

        <div className="account-content container mb-5 ">

          <div className="account-content-main text-center">
            <h1> <img src={HandWave} alt="" width={'60px'} /> Hello There!</h1>
          </div>

          <div className="account-form">

            <h1>Login</h1>

            <form onSubmit={handleLogin}>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <br />
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />

              <div className="account-form-btn">

                <button type="submit" className="btn btn-dark mt-3">
                  Login
                </button>

                {/* {token && (
                  <button onClick={handleLogout} className="btn btn-dark mt-3">
                    Logout
                  </button>
                )} */}


                <Link to="/register" className="ms-3 ">
                  Create an account
                </Link>

              </div>

            </form>

          </div>

        </div>

      </section>
      <Links />



    </>
  );
}

export default Login;
