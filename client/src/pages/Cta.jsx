import { Link } from "react-router-dom";
function Cta() {

    return (
        <>
            <div data-aos="fade-left">

                <section className="cta" id="cta">

                    <div className="cta-content container-fluid ">

                        <div className="cta-content-main text-center">
                            <h1>WE HELP YOU FUEL UP ON CONVENIENCE</h1>

                            <Link to='/about' className="btn btn-dark">learn more</Link>
                        </div>

                    </div>

                </section>

            </div>

        </>
    )

}

export default Cta;