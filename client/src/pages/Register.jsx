import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Links from "./Links";
import Poster from "./Poster";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=>{
  // if (localStorage.getItem("token") !== null) {
  // window.location.href="/home";
  // }
  // }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (password === confirmpassword) {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        alert("Successfully registered")
        window.location.href = "/";
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  return (

    <>

      <section className="register" id="register">

        <div className="register-content">

          <div className="register-content-main">


          </div>

          <div className="register-form mb-5">
            <h1 className="fw-bold">Register</h1>
            <form onSubmit={handleRegister}>

              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />

              <input
                type="password"
                className="form-control"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
              {/* {isLoading ? (
        <button type="submit" disabled className="btn btn-dark mt-3">
          Registering...
        </button>
      ) : (
        <button type="submit" className="btn btn-dark mt-3">
          Create account
        </button>
      )} */}

              <div className="account-form-btn">
                <button type="submit" className="btn btn-dark mt-3">
                  Create account
                </button>

                <Link to="/account" className="ms-3 align-middle">
                  I have an account.
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

export default Register;
