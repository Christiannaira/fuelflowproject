import { Outlet } from "react-router-dom";
import Navigation from './Navigation';

function Layout() {

    return (
        <>
            {/* header section layout */}
            <header>

                <Navigation />

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