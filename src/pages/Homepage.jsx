import React from 'react';
import {Link} from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import AppNav from "../components/AppNav.jsx";

const Homepage = () => {
    return (
        <div>
            <PageNav/>
            <AppNav/>
            <h1>Homepage</h1>
            <Link to='/app'>Go to the app</Link>
        </div>
    );
};

export default Homepage;