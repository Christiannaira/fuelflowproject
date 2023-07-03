import { Link } from 'react-router-dom'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtube.png'

function Navigation() {

    return (
        <>

            <section className="navigation" id="navigation">

                <div className="header-cta">
                    <a href='/account'><i class='bx bx-user' ></i>Create your account now! </a>
                </div>

                <div className="navigation-content  container-fluid d-flex align-items-center justify-content-between">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">about us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/stations' className="nav-link">gas stations</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/pricing' className="nav-link">pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/account' className="nav-link">account</Link>
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