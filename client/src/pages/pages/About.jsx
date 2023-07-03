import AboutVideo from '../../assets/about_video.mp4';

function About() {

    return (
        <>

            <section className="about" id="about">

                <div className="about-content">

                    <div className="about-content-main">
                        <h1>Fuel <span>On-Demand</span></h1>

                    </div>

                    <div className="about-content-text">
                        <p>is an on-demand service for fuel delivery. It will revolutionize the traditional way of filling up vehicle that hasn't change for so many decades. Gasmee will address many challenges on the road like traffic, long road travel without fuelling service stations, and just mainly forget to fuel up before you leave your house or office. So why waste time to go to a fuelling station if you can just order a fuel using your finger tips.</p>
                    </div>

                    {/* <div className="about-video">
                        <video src={AboutVideo} autoPlay loop muted></video>
                    </div> */}

                </div>

            </section>

        </>
    )

}

export default About;