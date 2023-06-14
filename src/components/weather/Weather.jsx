import React from "react";
import LocationsContext from "../Context.jsx";
import { Navigate } from "react-router-dom";

function Weather(){

    const { cityData } = React.useContext(LocationsContext);

    function convertToFarenheit(kelvin){
        return Math.round((kelvin-273.15)*(9/5)+32)
    }

    return(
            <div className="weather-section">
                {!(cityData.message === "success") ? <Navigate to="/home"/> :
                    <div className="outer-container-weather">
                        <h1>Weather data for {cityData.city}</h1>
                        <div className="weather-specifics">
                                <h2><i className="fa-solid fa-temperature-three-quarters"></i> Temperature: {convertToFarenheit(cityData.temperature)} Degrees Farenheit</h2>
                                <h2><i className="fa-solid fa-star"></i> Feels Like: {convertToFarenheit(cityData.feelsLike)} Degrees Farenheit</h2>
                                <h2><i className="fa-solid fa-arrow-up"></i> High of: {convertToFarenheit(cityData.high)} Degrees Farenheit</h2>
                                
                                <h2><i className="fa-solid fa-down-long"></i> Low of: {convertToFarenheit(cityData.low)} Degrees Farenheit</h2>
                                <h2><i className="fa-solid fa-cloud"></i> Humidity: {cityData.humidity} Degrees Farenheit</h2>
                                <h2><i className="fa-solid fa-wind"></i> Wind Speeds: {cityData.windspeeds} MPH</h2>
                                
                                <h2><i className="fa-solid fa-filter"></i> Air pressure: {cityData.airPressure} hPa</h2>
                                <h2><i className="fa-solid fa-circle-info"></i> Outside: {cityData.short + ", expect: " + cityData.long}</h2>
                                <h2><i className="fa-solid fa-magnifying-glass"></i> Coordinates: {cityData.coordinates.lat + ", " + cityData.coordinates.long}</h2>

                        </div>
                    </div>
                }
            </div>
        )   
};

export default Weather;