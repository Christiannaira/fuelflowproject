import PosterVideo from '../assets/poster_video.mp4'

function Poster() {

    return (
        <>

            <section className="poster" id="poster">

                <div className="poster-content ">

                    {/*hero video section layout*/}
                    <div className="poster-video">
                        <video src={PosterVideo} autoPlay loop muted></video>
                    </div>


                    {/*hero text content section layout*/}
                    <div className="poster-text-content w-100 text-center">
                        <h1>Fuel Ordering <br /> Simplified</h1>

                    </div>

                    {/*overlay dark colosr*/}
                    <div className="overlay">

                    </div>

                </div>

            </section>

        </>
    )

}

export default Poster;