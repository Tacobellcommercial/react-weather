import React from "react";

const LocationsContext = React.createContext();

export function LocationsContextProvider({children}){

    const [cityData, setCityData] = React.useState("");

    function sendCityData(city){
        return fetch("https://react-weather-api-3ovi.onrender.com/city-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({city})
        }).then(response=>{
            return response.json();
        }).then(data=>{
            return data;
        })
    }

    return(
        <LocationsContext.Provider value={{sendCityData, setCityData, cityData}}>{children}</LocationsContext.Provider>
    )
};

export default LocationsContext;