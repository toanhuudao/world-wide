import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from "./pages/Homepage.jsx";
import Pricing from "./pages/Pricing.jsx";
import Product from "./pages/Product.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import './index.css'

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='product' element={<Product/>} />
            <Route path='pricing' element={<Pricing/>} />
            <Route path='app' element={<AppLayout/>} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </BrowserRouter>
}
export default App;