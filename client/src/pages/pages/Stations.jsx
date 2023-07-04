import StationOne from '../../assets/stationOne.png';
import StationTwo from '../../assets/stationTwo.png';
import StationThree from '../../assets/stationThree.svg';
import StationFour from '../../assets/stationFour.png';
import StationFive from '../../assets/stationFive.jpg';

function Stations() {

    return (
        <>

            <section className="station" id="station">

                <div className="station-content">

                    <div className="station-content-main">
                        <h1>Stations</h1>
                    </div>

                    <div className="station-content-lists">

                        <div className="station-station-lists container">

                            {/*row one*/}

                            <div className="row">

                                <div className="col-md-12">

                                    <div className="row">

                                        <div className="col-md-5">

                                            <div className="station-img ">
                                                <img src={StationOne} alt="" />
                                            </div>

                                        </div>

                                        <div className="col-md-7 ">

                                            <div className="station-title">
                                                <h2>Phoenix Petroleum</h2>
                                            </div>

                                            <div className="station-ratings">

                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bx-star' ></i>
                                            </div>

                                            <div className="station-pricing">
                                                <h2>2.1</h2>
                                            </div>

                                            <div className="station-details">
                                                <p>Phoenix Petroleum offers a wide range of petroleum products that service the needs of various customers - from the simple motorist to big companies.</p>
                                                <span><i class='bx bx-time-five' ></i> open 24 hours</span>
                                            </div>

                                            <div className="station-btn">
                                                <a href="" className="btn btn-dark">order</a>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/*row two*/}

                            <div className="row ">

                                <div className="col-md-12">

                                    <div className="row">

                                        <div className="col-md-5">

                                            <div className="station-img">
                                                <img src={StationTwo} alt="" />
                                            </div>

                                        </div>
                                        <div className="col-md-7 ">

                                            <div className="station-title">
                                                <h2>Eastern Petroleum</h2>
                                            </div>

                                            <div className="station-ratings">

                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                            </div>

                                            <div className="station-pricing">
                                                <h2>2.00</h2>
                                            </div>

                                            <div className="station-details">
                                                <p>Eastern Petroleum has pioneered in introducing world-class technologies and quality fuel products into the Philippines.</p>
                                                <span>open 24/7 hours</span>
                                            </div>

                                            <div className="station-btn">
                                                <a href="" className="btn btn-dark">order</a>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/*row three*/}

                            <div className="row ">

                                <div className="col-md-12">

                                    <div className="row">

                                        <div className="col-md-5">

                                            <div className="station-img ">
                                                <img src={StationThree} alt="" />
                                            </div>

                                        </div>
                                        <div className="col-md-7 ">

                                            <div className="station-title">
                                                <h2>Sea Oil</h2>
                                            </div>

                                            <div className="station-ratings">

                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bx-star' ></i>
                                            </div>

                                            <div className="station-pricing">
                                                <h2>2.2</h2>
                                            </div>

                                            <div className="station-details">
                                                <p>SEAOIL continues to expand its retail network even in areas with under-served markets because we are committed to providing high-quality and affordable products to more Filipino consumers.</p>
                                                <span>open 24/7 hours</span>
                                            </div>

                                            <div className="station-btn">
                                                <a href="" className="btn btn-dark">order</a>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/*row four*/}

                            <div className="row ">

                                <div className="col-md-12">

                                    <div className="row">

                                        <div className="col-md-5">

                                            <div className="station-img ">
                                                <img src={StationFour} alt="" />
                                            </div>

                                        </div>
                                        <div className="col-md-7 ">

                                            <div className="station-title">
                                                <h2>Petron</h2>
                                            </div>

                                            <div className="station-ratings">

                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bx-star' ></i>
                                                <i class='bx bx-star' ></i>
                                            </div>

                                            <div className="station-pricing">
                                                <h2>2.1</h2>
                                            </div>

                                            <div className="station-details">
                                                <p>Petron Corporation is the largest oil refining and marketing company in the Philippines and is a leading player in the Malaysian market. We have a combined refining capacity of nearly 270,000 barrels-per-day, producing a full-range of premium fuels and petrochemicals to fuel the lives of millions of Filipinos and Malaysians. Leading through partnership and innovation, we power industries, drive economic growth, and fuel the future.</p>
                                                <span>open 24/7 hours</span>
                                            </div>

                                            <div className="station-btn">
                                                <a href="" className="btn btn-dark">order</a>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/*row five*/}

                            <div className="row ">

                                <div className="col-md-12">

                                    <div className="row">

                                        <div className="col-md-5">

                                            <div className="station-img ">
                                                <img src={StationFive} alt="" />
                                            </div>

                                        </div>
                                        <div className="col-md-7 ">

                                            <div className="station-title">
                                                <h2>FlexFuel</h2>
                                            </div>

                                            <div className="station-ratings">

                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bx-star' ></i>
                                            </div>

                                            <div className="station-pricing">
                                                <h2>2.1</h2>
                                            </div>

                                            <div className="station-details">
                                                <p>A flexible-fuel vehicle or dual-fuel vehicle is an alternative fuel vehicle with an internal combustion engine designed to run on more than one fuel, usually gasoline blended with either ethanol or methanol fuel, and both fuels are stored in the same common tank.</p>
                                                <span>open 24/7 hours</span>
                                            </div>

                                            <div className="station-btn">
                                                <a href="" className="btn btn-dark">order</a>
                                            </div>

                                        </div>

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

export default Stations;