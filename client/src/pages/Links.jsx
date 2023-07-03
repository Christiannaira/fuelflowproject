function Links() {

    return (
        <>

            <section className="links" id="links">
                <div className="links-content">

                    <div className="links-col container-fluid">

                        <div className="row text-white p-5">

                            <div className="links-content-main col-md-3">
                                <h1>Fuel<span>Flow</span></h1>
                                <p>We are a leading diesel fuel supplier specializing in off-road diesel delivery, bulk fuel, and emergency diesel delivery services. With our innovative technology platform, we provide fast, reliable, and cost-effective fuel delivery solutions to businesses and individuals nationwide.</p>
                            </div>

                            <div className="col-md-2">

                                <h3>Overview</h3>

                                <div className="col-links d-flex flex-column">
                                    <a href="#">Solutions</a>
                                    <a href="#">Platform</a>
                                    <a href="#">Services</a>
                                    <a href="#">Industries</a>
                                    <a href="#">Products</a>
                                </div>

                            </div>

                            <div className="col-md-2">

                                <h3>Learn More</h3>

                                <div className="col-links d-flex flex-column">
                                    <a href="#">Careers</a>
                                    <a href="#">About</a>
                                    <a href="#">Press / News</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Sponsorships</a>
                                    <a href="#">Sitemap</a>
                                </div>

                            </div>

                            <div className="col-md-2">

                                <h3>Support</h3>

                                <div className="col-links d-flex flex-column">
                                    <a href="#">Help Center</a>
                                    <a href="#">Tickets</a>
                                    <a href="#">Faq</a>
                                    <a href="#">Status</a>
                                    <a href="#">Contact Us</a>

                                </div>

                            </div>

                            <div className="col-md-3 newsletter">
                                <h3>Subscribe to Our Newsletter</h3>
                                <span>Stay Up To Date On The Latest Things FuelFlow</span>

                                <div className="links-newsletter">

                                    <form action="#">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" className="form-control" />
                                        <a href="#" className="btn btn-dark">Submit</a>
                                    </form>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="endline"></div>

                    <div className="endtext">

                        <span>@copyright 2023. FuelFlow Official Website. Designed by Group 3.</span>

                    </div>

                </div>


            </section>

        </>
    )

}

export default Links;