import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from "./pages/Homepage.jsx";
import Pricing from "./pages/Pricing.jsx";
import Product from "./pages/Product.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import './index.css'
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";

const BASE_URL = 'http://localhost:8000';

function App() {
    const [cities, setCities] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            } catch (e) {
                alert("error loading data...")
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities();
    }, []);

    return <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Homepage/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='pricing' element={<Pricing/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='app' element={<AppLayout/>}>
                <Route index path='cities' element={<CityList cities={cities} isLoading={isLoading}/>}/>
                <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>}/>
                <Route path='countries' element={<p>Country</p>}/>
                <Route path='form' element={<p>Form</p>}/>
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;