function Faqs() {

    return (
        <>

            <section className="faqs" id="faqs">
                <div className="faqs-content container-fluid">

                    <div className="faqs-content-main">
                        <h1>Any Questions?</h1>

                    </div>

                    <div class="faqs-accordion container mt-3 ">

                        <div id="accordion">


                            <div class="card">
                                <div class="card-header">
                                    <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                                        What types of vehicle and machines does FuelFlow deliver to?
                                    </a>
                                </div>
                                <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <span>We can deliver fuel to:</span>
                                        <ul>
                                            <li>Cars</li>
                                            <li>Motorcycles</li>
                                            <li>Boats</li>
                                            <li>Jet Skis</li>
                                            <li>Generators</li>
                                            <li>Trucks</li>
                                        </ul>
                                        <span>We can refuel boats and other watercraft at selected areas.</span>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                                        We can refuel boats and other watercraft at selected Marinas in Dubai
                                    </a>
                                </div>
                                <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <p>Once you've placed an order, you cannot change or reschedule it via the app. If you want to make changes to a scheduled delivery, simply cancel it and place a new order.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                                        Can I order a fuel delivery if I have an emergency on a highway?
                                    </a>
                                </div>
                                <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <p>  If you run out of fuel on the highway, you can order as usual using the app. Our Pilot will make a safety assessment based on your location, and if we can safely help you, we'll refuel your vehicle.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
                                        Can I order fuel for multiple vehicles?
                                    </a>
                                </div>
                                <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <p> Yes, you can store multiple vehicles in your account and select which vehicle you'd like to order fuel for.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
                                        How can I reschedule a missed delivery?
                                    </a>
                                </div>
                                <div id="collapseFive" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <p> Contact our Customer Care Team (800-MYCAFU) to reschedule a missed delivery.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )

}

export default Faqs;