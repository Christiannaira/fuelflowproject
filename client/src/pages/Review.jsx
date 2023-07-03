import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import ClientOne from '../assets/client1.jpg';
import ClientTwo from '../assets/client2.jpg';
import ClientThree from '../assets/client3.jpg';
import ClientFour from '../assets/client4.jpg';

function Review() {

    return (
        <>

            <section className="review" id="review">
                <div className="review-content ">

                    <div className="review-content-main text-center">
                        <h1>Testimonials</h1>
                    </div>

                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>

                            <div className="review-client-content">

                                <div className="review-profile d-flex align-items-center">

                                    <div className="review-profile-img">
                                        <img src={ClientOne} alt="" />
                                    </div>

                                    <div className="review-profile-text">

                                        <h4>Jehu Anderson<i class='bx bxs-check-circle' ></i></h4>
                                        <span>1/16/23 via instagram <i class='bx bxl-instagram' ></i></span>

                                    </div>

                                </div>

                                <div className="review-des">

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid dicta ipsum molestias quos earum odio, quisquam voluptatibus natus quibusdam facilis molestiae, voluptate porro ex quidem optio necessitatibus commodi! Voluptatibus?</p>

                                </div>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="review-client-content">

                                <div className="review-profile d-flex align-items-center">

                                    <div className="review-profile-img">
                                        <img src={ClientTwo} alt="" />
                                    </div>

                                    <div className="review-profile-text">

                                        <h4>Lena Zyrno<i class='bx bxs-check-circle' ></i></h4>
                                        <span>1/16/23 via twitter <i class='bx bxl-twitter' ></i></span>

                                    </div>

                                </div>

                                <div className="review-des">

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid dicta ipsum molestias quos earum odio, quisquam voluptatibus natus quibusdam facilis molestiae, voluptate porro ex quidem optio necessitatibus commodi! Voluptatibus?</p>

                                </div>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="review-client-content">

                                <div className="review-profile d-flex align-items-center">

                                    <div className="review-profile-img">
                                        <img src={ClientThree} alt="" />
                                    </div>

                                    <div className="review-profile-text">

                                        <h4>Zerko Guiterrez<i class='bx bxs-check-circle' ></i></h4>
                                        <span>1/16/23 via facebook <i class='bx bxl-facebook' ></i></span>

                                    </div>

                                </div>

                                <div className="review-des">

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid dicta ipsum molestias quos earum odio, quisquam voluptatibus natus quibusdam facilis molestiae, voluptate porro ex quidem optio necessitatibus commodi! Voluptatibus?</p>

                                </div>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="review-client-content">

                                <div className="review-profile d-flex align-items-center">

                                    <div className="review-profile-img">
                                        <img src={ClientFour} alt="" />
                                    </div>

                                    <div className="review-profile-text">

                                        <h4>Amber Jepson<i class='bx bxs-check-circle' ></i></h4>
                                        <span>1/16/23 via instagram <i class='bx bxl-instagram' ></i></span>

                                    </div>

                                </div>

                                <div className="review-des">

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid dicta ipsum molestias quos earum odio, quisquam voluptatibus natus quibusdam facilis molestiae, voluptate porro ex quidem optio necessitatibus commodi! Voluptatibus?</p>

                                </div>

                            </div>

                        </SwiperSlide>

                    </Swiper>

                </div>
            </section>

        </>
    )

}

export default Review;