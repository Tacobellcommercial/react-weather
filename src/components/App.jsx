import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./home/Home.jsx";
import Weather from "./weather/Weather.jsx";
import Features from "./features/Features.jsx";
import {Routes, Route, Navigate } from "react-router-dom";
import { LocationsContextProvider } from "./Context.jsx";

function App(){
    return(
        <LocationsContextProvider>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/weather" element={<Weather/>}/>
                <Route path="/features" element={<Features/>}/>
            </Routes>
        </LocationsContextProvider>
    )
}

export default App;