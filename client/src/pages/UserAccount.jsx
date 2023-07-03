import { useState, useEffect } from "react";
import UserProfile from '../assets/profile.png';

function UserAccount() {

    const [user, setUser] = useState(null);
    const [user_id, setuser_id] = useState(localStorage.getItem("user_id"));

    const fetchUser = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/getuser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            setUser(data);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token") === true) {
            window.location.href = "/";
        } else {
            fetchUser();
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        alert("Log out success!");
        window.location.href = "/";
    };

    return (
        <>

            {/* <section className="useraccount" id="useraccount">

                <div className="useraccount-content">

                    <div className="useraccount-content-main">

                    </div>

                    <div className="user-activities container   ">

                        <div className="row">

                            <div className="col-md-12 user">

                                <div className="useraccount-text">

                                    <div className="user-profile d-flex align-items-center justify-content-start">

                                        <div className="user-img">
                                            <img src={UserProfile} alt="" width={'100px'} />
                                        </div>

                                        {
                                            (user === null) ? "" : <h1>{user.name} <i class='bx bxs-check-circle'></i></h1>
                                        }
                                    </div>


                                </div>

                            </div>

                            <div className="cold-md-12">

                                <h3>Contact</h3>
                                <p>No registered services, you can add some on the settings page.</p>

                            </div>

                            <div className="cold-md-12">

                                <h3>Biography</h3>
                                <p>{(user === null) ? "" : user.name} hasn't added a bio</p>

                            </div>


                            <div className="cold-md-12">

                                <h3>Links</h3>
                                <p>{(user === null) ? "" : user.name} hasn't added any links</p>

                            </div>


                            <div className="profile-btn">
                                <button onClick={handleLogout} className="btn btn-dark mt-3">
                                    Logout
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </section> */}

            <section className="useraccount" id="useraccount">

                <div className="useraccount-content container-fluid ">

                    <div className="row ">

                        <div className="col-md-2">

                            <div className="row-content border">
                                <h3>blogs</h3>

                                <div className="row-content-info">
                                    <span>no blog</span>
                                </div>

                            </div>

                        </div>

                        <div className="col-md-6  border">

                            <div className="user-profile">
                                <img src={UserProfile} alt="" width={'100px'} />

                                <div className="user-text">

                                    <h1>{(user === null) ? "" : user.name}</h1>

                                    <div className="user-des d-flex justify-content-between align-items-center">

                                        <div>
                                            <span className="bio">your bio</span>

                                            <span className="address">
                                                <i class='bx bxs-edit-location' ></i> address
                                            </span>
                                        </div>

                                        <button className="btn btn-dark" onClick={handleLogout} >Logout</button>

                                    </div>

                                </div>
                            </div>



                        </div>

                        <div className="col-md-4 ">
                            <div className="row-content border">
                                <h3>About</h3>

                                <div className=" row-content-info">
                                    <span>no address</span>
                                    <span>no mobile number</span>
                                    <span>no biography</span>
                                    <span>no links</span>


                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )

}

export default UserAccount;