import PriceOne from '../../assets/price1.jpg';
import PriceTwo from '../../assets/price2.jpg';
import Faqs from '../Faqs';
import Links from '../Links';

function Pricing() {

    return (
        <>

            <section className="pricing" id="pricing">
                <div className="pricing-content">

                    <div className="pricing-content-main">

                        <h1>Same price as the petrol station, with <span>free delivery</span></h1>


                    </div>

                    <div className="pricing-prices">

                        <div className="container">
                            <div className="row">

                                <div className="col-md-4">

                                    <div className="row-content">

                                        <h1><i class='bx bx-car'></i><span>2</span>.89</h1>
                                        <span className="sizes">Special 95, per litre</span>

                                    </div>


                                </div>

                                <div className="col-md-4">

                                    <div className="row-content">

                                        <h1><i class='bx bx-car'></i><span>3</span>.00</h1>
                                        <span className="sizes">Super 98, per litre</span>

                                    </div>



                                </div>

                                <div className="col-md-4">

                                    <div className="row-content">

                                        <h1><i class='bx bx-car'></i><span>2</span>.76</h1>
                                        <span className="sizes">Diesel, per litre</span>

                                    </div>



                                </div>

                            </div>
                        </div>

                        <div className="pricing-additions container">

                            <div className="row mt-5">

                                <div className="col-md-6">

                                    <div className="row-img">
                                        <img src={PriceOne} alt="" width={'100%'} />
                                    </div>

                                    <div className="row-txt">
                                        <h3>Park outdoors</h3>
                                        <p>We can only make fuel deliveries to vehicles parked outdoors. Please make sure that you're safely parked, and that your fuel cap is unlocked and accessible.</p>
                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <div className="row-img">
                                        <img src={PriceTwo} alt="" width={'100%'} />
                                    </div>

                                    <div className="row-txt">
                                        <h3>Leave your fuel cap open</h3>
                                        <p>Don't worry - it's completely safe to leave your fuel cap unlocked (and there's no need to leave your doors unlocked). In fact, many manufacturers now fit fuel caps that can't be locked.</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <Faqs />
            <Links />

        </>
    )

}

export default Pricing;