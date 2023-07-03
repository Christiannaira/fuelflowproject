import PosterVideo from '../assets/poster_video.mp4'

function Poster() {

    return (
        <>

            <section className="poster" id="poster">

                <div className="poster-content ">

                    <div className="poster-video">
                        <video src={PosterVideo} autoPlay loop muted></video>
                    </div>

                    <div className="poster-text">
                        <h1>Make Your Life Easier</h1>
                    </div>

                    {/*overlay dark color*/}
                    <div className="overlay">

                    </div>

                </div>

            </section>

        </>
    )

}

export default Poster;