import AboutVideo from '../../assets/about_video.mp4';
import Review from '../Review';
import Poster from '../Poster';
import Links from '../Links';
import Faqs from '../Faqs';
import Partners from '../Partners';

function About() {

    return (
        <>

            <section className="about" id="about">

                <div className="about-content">

                    <div className="about-content-main">
                        <h1>Fuel <span>On-Demand</span></h1>

                    </div>

                    <div className="about-content-text">
                        <p>FuelFlow is an on-demand service for fuel delivery. It will revolutionize the traditional way of filling up vehicle that hasn't change for so many decades. Gasmee will address many challenges on the road like traffic, long road travel without fuelling service stations, and just mainly forget to fuel up before you leave your house or office. So why waste time to go to a fuelling station if you can just order a fuel using your finger tips.</p>

                        <h3>Missions</h3>
                        <p>At Fuel Flow, our mission is to revolutionize the way fuel is delivered to customers. We are committed to providing convenient, safe, and reliable petrol gas delivery services that save time and enhance the overall customer experience. By leveraging cutting-edge technology and a customer-centric approach, we aim to simplify the refueling process and make it more accessible to individuals and businesses alike. Our mission is to be the trusted partner for on-demand fuel delivery, empowering our customers to focus on what matters most to them while we take care of their fuel needs.</p>
                        <h3>Vision</h3>
                        <p>Our vision is to transform the way people access and consume fuel, leading the industry towards a future that is efficient, eco-friendly, and hassle-free. We envision a world where traditional refueling methods are replaced by innovative solutions that prioritize convenience and sustainability. Through our petrol gas delivery services, we aspire to contribute to a cleaner environment by reducing unnecessary trips to the gas station and minimizing carbon emissions. We strive to be pioneers in the fuel delivery industry, continuously evolving our technologies and processes to exceed customer expectations and shape the future of mobility.</p>

                    </div>

                    {/* <div className="about-video">
                        <video src={AboutVideo} autoPlay loop muted></video>
                    </div> */}

                </div>

            </section>
            <Partners />
            <Faqs />
            <Review />
            <Poster />
            <Links />
        </>
    )

}

export default About;