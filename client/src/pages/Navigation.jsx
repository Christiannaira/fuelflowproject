import { Link } from 'react-router-dom'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtube.png'
import { useLocation } from "react-router-dom";

function Navigation() {

    const location = useLocation();

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
                        <a href="#">
                            <img src={Facebook} alt="" width={'15px'} />
                        </a>
                        <a href="#">
                            <img src={Instagram} alt="" width={'15px'} />
                        </a>
                        <a href="#">
                            <img src={Twitter} alt="" width={'15px'} />
                        </a>
                        <a href="#">
                            <img src={Youtube} alt="" width={'15px'} />
                        </a>

                    </div>

                </div>
            </section>

        </>
    )

}

export default Navigation;