import { Link } from "react-router-dom";
function Cta() {

    return (
        <>

            <section className="cta" id="cta">

                <div className="cta-content container-fluid ">

                    <div className="cta-content-main text-center">
                        <h1>WE HELP YOU FUEL UP ON CONVENIENCE</h1>
                        <p>FuelFlow is a fuel delivery service that keeps your ride and business fleets rolling-without you having to step foot in a gas station. Instead, we bring the gas to you.</p>
                        <Link to='/about' className="btn btn-dark">learn more</Link>
                    </div>

                </div>

            </section>


        </>
    )

}

export default Cta;