

function Solutions() {

    return (
        <>

            <section className="solution" id="solution">

                <div className="solution-content" id="container-fluid">

                    <div className="solution-content-main text-center">

                        <h1>Solutions</h1>
                        <p>Perfect for helping you with your daily routine, say good bye to fuel wasting trips for gas station + time wasting in the traffic jam. Simply select the time and your location, any litre as you want. Available to view online or any mobile device.</p>
                    </div>

                    {/*boxes*/}

                    <div className="solution-content-boxes container">

                        <div className="row">
                            <div className="col-md-3 ">

                                <div className="col-contents focus">


                                    <div className="col-icons">
                                        <i class='bx bx-time-five'></i>
                                    </div>

                                    <h3>Time Savings</h3>

                                    <p>Customers can order, monitor, track, and manage their fuel in real time. Get rid of unnecessary paper chasing.</p>

                                </div>

                            </div>
                            <div className="col-md-3 ">

                                <div className="col-contents">


                                    <div className="col-icons">
                                        <i class='bx bx-list-check' ></i>
                                    </div>

                                    <h3>Consistency</h3>

                                    <p>Properly track and manage your fuel with the comfort of knowing you won't have to circle back checking for discrepancies.</p>

                                </div>

                            </div>
                            <div className="col-md-3 ">

                                <div className="col-contents">

                                    <div className="col-icons">
                                        <i class='bx bx-package' ></i>
                                    </div>

                                    <h3>Vetted Suppliers</h3>

                                    <p>Be confident in the service and pricing of each delivery, no matter the location.</p>

                                </div>

                            </div>
                            <div className="col-md-3 ">

                                <div className="col-contents">


                                    <div className="col-icons">
                                        <i class='bx bxs-truck' ></i>
                                    </div>

                                    <h3>Vendor Aggregation</h3>

                                    <p>Ensure you always have the fuel you need and eliminate the need for manual tracking and coordination across all sites with the Fuel Me platform.</p>

                                </div>

                            </div>
                        </div>

                    </div>

                    <p>FuelFlow is a fuel delivery service that keeps your ride and business fleets rolling-without you having to step foot in a gas station. Instead, we bring the gas to you.</p>

                    <div className="solution-btn">
                        <a href="/about" className="btn btn-dark">VIEW ALL SOLUTIONS</a>
                    </div>

                </div>

            </section>

        </>
    )

}

export default Solutions;