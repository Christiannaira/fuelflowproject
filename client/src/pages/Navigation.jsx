import { Link } from 'react-router-dom'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtube.png'
import { useLocation } from "react-router-dom";
import ProfilePic from '../assets/profile.png';
import { useEffect } from 'react'

function Navigation() {

    const location = useLocation();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        alert("Log out success!");
        window.location.href = "/";
    };


    useEffect(() => {

        const icons = document.querySelector(".navigational-icons");
        const items = icons.getElementsByClassName('icon');

        if (token) {

            for (let i = 0; i < items.length; i++) {

                items[i].style.display = 'none'

            }

        } else {


            for (let i = 0; i < items.length; i++) {

                items[i].style.display = 'inline-block'

            }

        }

    }, [token]);




    return (
        <>

            <section className="navigation" id="navigation">

                <div className="navigation-content  container-fluid d-flex align-items-center justify-content-between">
                    <ul className="nav">

                        <li className="nav-item">
                            <Link to='/' className={`nav-link ${(location.pathname === `/`) ? `fw-bold border-bottom border-dark border-2 ` : ``}`}>home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className={`nav-link ${(location.pathname === `/about`) ? `fw-bold border-bottom border-dark border-2` : ``}`}>about us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/stations' className={`nav-link ${(location.pathname === `/stations`) ? `fw-bold border-bottom border-dark border-2` : ``}`}>gas stations</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/pricing' className={`nav-link ${(location.pathname === `/pricing`) ? `fw-bold border-bottom border-dark border-2` : ``}`}>pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/account' className={`nav-link ${(location.pathname === `/account`) ? `fw-bold border-bottom border-dark border-2` : ``}`}>account</Link>
                        </li>
                    </ul>
                    <div className="navigational-icons">
                        <a href="#" className='icon'>
                            <img src={Facebook} alt="" width={'15px'} />
                        </a>
                        <a href="#" className='icon'>
                            <img src={Instagram} alt="" width={'15px'} />
                        </a>
                        <a href="#" className='icon'>
                            <img src={Twitter} alt="" width={'15px'} />
                        </a>
                        <a href="#" className='icon'>
                            <img src={Youtube} alt="" width={'15px'} />
                        </a>


                        {token && (

                            <Link to='/useraccount' className='profile'>
                                <img src={ProfilePic} alt="" width={'35px'} style={{ display: 'inline-block' }} />
                            </Link>

                        )}

                        <div className="hamburger-menu" onClick={() => {

                            const nav = document.querySelector(".nav");

                            nav.classList.toggle("open");


                        }}>
                            <i class='bx bx-menu' ></i>
                        </div>


                    </div>

                </div>
            </section>

        </>
    )

}

export default Navigation;