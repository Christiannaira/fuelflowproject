import { Outlet, useLocation } from "react-router-dom";
import Navigation from './Navigation';
import { Helmet } from 'react-helmet';

function Layout() {

    const location = useLocation();



    return (
        <>
            <Helmet>
                {
                    location.pathname === '/' ?
                        (
                            <title>home</title>
                        ) : ""
                }

                {
                    location.pathname === '/about' ?
                        (
                            <title>about</title>
                        ) : ""
                }

                {
                    location.pathname === '/stations' ?
                        (
                            <title>stations</title>
                        ) : ""
                }

                {
                    location.pathname === '/pricing' ?
                        (
                            <title>pricing</title>
                        ) : ""
                }

                {
                    location.pathname === '/account' ?
                        (
                            <title>account</title>
                        ) : ""
                }
            </Helmet>
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