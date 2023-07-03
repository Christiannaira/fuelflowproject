import { useState, useEffect } from "react";

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

            <section className="useraccount" id="useraccount">

                <div className="useraccount-content">

                    <div className="useraccount-content-main">
                        {
                            (user === null) ? "" : <h1>Hi,{user.name}!</h1>
                        }
                        <button onClick={handleLogout} className="btn btn-dark mt-3">
                            Logout
                        </button>
                    </div>

                </div>

            </section>

        </>
    )

}

export default UserAccount;