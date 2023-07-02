import HeroVideo from '../assets/hero_video.mp4';

function Hero() {

    return (
        <>

            <section className="hero" id="hero">
                <div className="hero-content">

                    {/*hero video section layout*/}
                    <div className="hero-video">
                        <video src={HeroVideo} autoPlay loop muted></video>
                    </div>

                    {/*hero text content section layout*/}
                    <div className="hero-text-content">
                        <h1>save time, <br /> every time <br /> you refuel</h1>
                        <a href="#" className="btn btn-dark">order fuel</a>
                    </div>

                    {/*overlay dark colosr*/}
                    <div className="overlay">

                    </div>

                </div>
            </section>

        </>
    )

}

export default Hero;