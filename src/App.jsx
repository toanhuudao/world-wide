import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from "./pages/Homepage.jsx";
import Pricing from "./pages/Pricing.jsx";
import Product from "./pages/Product.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import './index.css'
import Login from "./pages/Login.jsx";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Homepage/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='pricing' element={<Pricing/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='app' element={<AppLayout/>}>
                <Route index element={<p>List</p>}/>
                <Route path='cities' element={<p>Cities</p>}/>
                <Route path='countries' element={<p>Country</p>}/>
                <Route path='form' element={<p>Form</p>}/>
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;