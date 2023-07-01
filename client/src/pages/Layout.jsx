import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <>
            {/* header section layout */}
            <header>



            </header>

            {/* main section layout */}
            <main>

                <Outlet />

            </main>

            {/* footer section layout */}
            <footer>



            </footer>

        </>
    )

}

export default Layout;