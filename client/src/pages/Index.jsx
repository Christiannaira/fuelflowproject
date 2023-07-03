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
import Accounts from './pages/Accounts';
import Pricing from './pages/Pricing';
import Stations from './pages/Stations';
import NoPage from './NoPage';
import Register from './Register';
import UserAccount from './UserAccount';


function Index() {

    return (
        <>

            <BrowserRouter>

                <Routes>

                    <Route path='/' element={<Layout />}>

                        <Route index element={<MainPage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/stations' element={<Stations />} />
                        <Route path='/pricing' element={<Pricing />} />
                        <Route path='/account' element={<Accounts />} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/useraccount' element={<UserAccount/>} />
                        <Route path="*" element={<NoPage />} />
                    </Route>


                </Routes>

            </BrowserRouter >

        </>
    )

}

export default Index;