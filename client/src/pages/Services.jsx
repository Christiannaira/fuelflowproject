
import { useEffect } from "react";
import OnRoad from '../assets/onroad.webp';
import OffRoad from '../assets/offroad.webp';
import Generator from '../assets/generator.webp';
import Bulk from '../assets/bulk.jpg';
import Emergency from '../assets/emergency.webp';
import Mobile from '../assets/mobile.webp';
import Reefer from '../assets/reefer.webp';
import OnSite from '../assets/onsite.webp';

function Services() {

    useEffect(() => {

        document.getElementById("defaultOpen").click();

    }, []);

    function openService(evt, serName) {

        let i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {

            tabcontent[i].style.display = 'none';

        }

        tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {

            tablinks[i].className = tablinks[i].className.replace(" active", " ");
        }

        document.getElementById(serName).style.display = 'block';
        evt.currentTarget.className += " active";

    }




    return (
        <>

            <section className="services" id="services">
                <div className="services-content">

                    <div className="services-content-main border ">
                        <h1>  FUELING SERVICES</h1>
                    </div>

                    <div className="services-row-contents container-fluid ">


                        <div className="tab ">
                            <a id="defaultOpen" className="tablinks" onClick={() => {
                                openService(Event, 'onRoad');
                            }}>On-Road Delivery</a>
                            <a className="tablinks" onClick={() => {
                                openService(Event, 'offRoad');
                            }}>Off-Road Delivery</a>
                            <a className="tablinks" onClick={() => {
                                openService(Event, 'generator');
                            }}>Generator Delivery</a>
                            <a className="tablinks" onClick={() => {
                                openService(Event, 'bulk');
                            }}>Bulk Delivery</a>
                            <a className="tablinks" onClick={() => {
                                openService(Event, 'emergency');
                            }}>Emergency Delivery</a>
                            <a className="tablinks" onClick={() => {
                                openService(Event, 'mobile');
                            }}>Mobile Fleet</a>
                            <a className="tablinks" onClick={() => {
                                openService(Event, 'reefer');
                            }}>Reefer Delivery</a>
                            <a className="tablinks" onClick={() => {
                                openService(Event, 'onsite');
                            }}>On-Site Delivery</a>
                        </div>

                        {/*content 1*/}

                        <div id="onRoad" className="tabcontent ">

                            <div className="row align-items-center">

                                <div className="col-md-6 ">
                                    <h3>On-Road Delivery</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ad dolores quo debitis labore nemo porro odit accusantium enim voluptatem. Consectetur minima eveniet obcaecati quisquam itaque perferendis qui deleniti repellat.</p>
                                </div>

                                <div className="col-md-6">

                                    <img src={OnRoad} alt="" width={'100%'} />


                                </div>

                            </div>

                        </div>

                        {/*content 2*/}
                        <div id="offRoad" className="tabcontent">

                            <div className="row align-items-center">

                                <div className="col-md-6">

                                    <h3>Off-Road Delivery</h3>
                                    <p>Off-road assets are often being used in remote locations, far from conventional fueling stations, making fuel delivery a critical component of any off-road operation.
                                        Our fuel delivery for off-road assets such as mining vehicles, construction equipment, or agricultural machinery can be provided through regular deliveries or even fuel storage tanks.
                                        We provide off-road assets the fuel needed to keep their operation moving with service and support to ensure around-the-clock effiency.</p>
                                </div>

                                <div className="col-md-6">

                                    <img src={OffRoad} alt="" width={'100%'} />

                                </div>

                            </div>


                        </div>

                        {/*content 3*/}
                        <div id="generator" className="tabcontent">

                            <div className="row align-items-center">

                                <div className="col-md-6">
                                    <h3>Generator Delivery</h3>
                                    <p>Fuel delivery ensures that generators have a continuous supply of fuel, reducing the risk of downtime and power outages.
                                        We can tailor our fuel delivery to your specific needs, providing either on-site or off-site deliveries.
                                        Utilize our fuel management platform monitor your fuel usage and ensure there is always a constant supply of fuel to your generators.</p>

                                </div>

                                <div className="col-md-6">

                                    <img src={Generator} alt="" width={'100%'} />

                                </div>

                            </div>


                        </div>

                        {/*content 4*/}
                        <div id="bulk" className="tabcontent">

                            <div className="row align-items-center">

                                <div className="col-md-6">

                                    <h3>Bulk Delivery</h3>
                                    <p>Bulk fuel delivery is the cost-effective and efficient solution for businesses and organizations that require large amounts of fuel on a regular basis.
                                        Whether that be directly into your machinery or fleet, or to your storage takes, reduce the need for frequent and time-consuming trips to fuel stations.
                                        Free up time and resources that can be used on other important parts of your operations.</p>

                                </div>

                                <div className="col-md-6">

                                    <img src={Bulk} alt="" width={'100%'} />

                                </div>

                            </div>


                        </div>

                        {/*content 5*/}
                        <div id="emergency" className="tabcontent">

                            <div className="row align-items-center">

                                <div className="col-md-6">

                                    <h3>Emergency Delivery</h3>
                                    <p>Where mobile fleets and equipment are often used to support events, concerts, and productions – our services serve an important role.
                                        Minimize your downtime and improve efficiency by having your fuel brought to you – no more need for drivers to travel to off-site fueling stations.
                                        For a fast-paced industry, partner with a fast-paced fuel delivery company like us and ensure all of your time-sensitive needs are being met.</p>

                                </div>

                                <div className="col-md-6">

                                    <img src={Emergency} alt="" width={'100%'} />

                                </div>

                            </div>

                        </div>

                        {/*content 6*/}
                        <div id="mobile" className="tabcontent">

                            <div className="row align-items-center">

                                <div className="col-md-6">

                                    <h3>Mobile Delivery</h3>
                                    <p>
                                        Ensure your vehicles have a steady and reliable supply of fuel by letting us bring the gas station to you.
                                        With our fuel delivery systems in place, mobile fleets can minimize downtown and improve efficiency, which results in increased productivity and profitability.
                                        Our services include on-site fuel delivery, the ability to schedule regular deliveries ahead of time, and having your fuel brought directly to you.
                                    </p>

                                </div>

                                <div className="col-md-6">

                                    <img src={Mobile} alt="" width={'100%'} />

                                </div>

                            </div>

                        </div>

                        {/*content 7*/}
                        <div id="reefer" className="tabcontent">

                            <div className="row align-items-center">

                                <div className="col-md-6">
                                    <h3>Reefer Delivery</h3>
                                    <p>Reefer trucks require a constant supply of fuel to power the refrigeration units that keep their cargo at the proper temperatures.
                                        Maintaining a steady and reliable supply of fuel is of the utmost importance to ensure the integrity of perishable cargo and precious goods.
                                        Let us help your fleet of reefer vehicles by delivering your fuel directly to you and spend more time on the road to keep moving.</p>

                                </div>

                                <div className="col-md-6">

                                    <img src={Reefer} alt="" width={'100%'} />

                                </div>

                            </div>


                        </div>

                        {/*content 8*/}
                        <div id="onsite" className="tabcontent">

                            <div className="row align-items-center">

                                <div className="col-md-6">

                                    <h3>On-Site Delivery</h3>

                                    <p>With on-site fuel delivery, vehicles and machinery can be refueled quickly and easily without ever leaving the jobsite.
                                        Skip the lines at gas stations, and save both the time and money associated with traveling to-and-from retail stations.
                                        Our on-site fuel delivery service can be customized to meet the specific needs of your business to improve your bottom line, reduce costs, and lead to an overall better experience on the job.</p>

                                </div>
                                <div className="col-md-6">

                                    <img src={OnSite} alt="" width={'100%'} />

                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </section>

        </>
    )

}

export default Services;