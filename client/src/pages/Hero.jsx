import HeroVideo from '../assets/hero_video.mp4';
import { useState, useEffect } from "react";



function Hero() {

  const [user, setUser] = useState(null);
  const [user_id, setuser_id] = useState(localStorage.getItem("user_id"));

  const fetchUser = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/getuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") === true) {
      window.location.href = "/";
    } else {
      fetchUser();
    }
  }, []);



  return (
    <>

      <div data-aos="fade-right">

        <section className="hero" id="hero">
          <div className="hero-content">

            {/*hero video section layout*/}
            <div className="hero-video">
              <video src={HeroVideo} autoPlay loop muted></video>
            </div>




            {/*hero text content section layout*/}
            <div className="hero-text-content">
              {/* {
                            (user === null) ? "" : <h1>Hi,{user.name}!</h1>
                        }                         */}
              <h1><span>save time</span>, <br /> every time <br /> you refuel</h1>
              <a href="/stations" className="btn btn-dark">order fuel</a>

            </div>

            {/*overlay dark colosr*/}
            <div className="overlay">

            </div>

          </div>
        </section>


      </div>

    </>
  )

}

export default Hero;