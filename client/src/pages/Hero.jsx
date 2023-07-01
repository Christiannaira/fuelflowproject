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
                        <h1>home</h1>
                    </div>

                </div>
            </section>

        </>
    )

}

export default Hero;