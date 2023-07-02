import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Layout from './Layout';
import Navigation from './Navigation';
import Solution from './Solution';
import Review from './Review';
import Benefits from './Benefits';
import Services from './Services';
import Partners from './Partners';
import Faqs from './Faqs';
import Links from './Links';
import About from './pages/About';


function Index() {

    return (
        <>

            <BrowserRouter>

                <Routes>

                    <Route path='/' element={<Layout />}>

                        <Route index element={<MainPage />} />
                        <Route path='/about' element={<About />} />

                    </Route>


                </Routes>

            </BrowserRouter >

        </>
    )

}

export default Index;