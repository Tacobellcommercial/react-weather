import React from "react";
import LocationsContext from "../Context";
import { Navigate } from "react-router-dom";

function InputBox(){

    const [cityName, setCityName] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [redirect, setRedirect] = React.useState(false);
    const { sendCityData, setCityData } = React.useContext(LocationsContext);

    return(
        <form className="input-box" onSubmit={(event)=>{
            event.preventDefault();
            let button = document.querySelector(".submit-button");
            button.disabled = true;
            button.innerText = "Sending...";
            const cityData = sendCityData(cityName).then(data=>{
                if (data.message == "success"){
                    setErrorMessage("");
                    setCityData(data);
                    setRedirect(true);
                    button.disabled = false;
                    button.innerText = "Search";
                }else{  
                    setErrorMessage(data.message);
                    button.disabled = false;
                    button.innerText = "Search";
                }
            })
        }}>
            {redirect && <Navigate to={"/weather"}/>}
            {errorMessage !== "" && <h1 className="error-message">{errorMessage}</h1>}
            <h2>Enter U.S City</h2>
            <p>To get weather information</p>
            <input placeholder="Enter city..." value={cityName} onChange={(event)=>{
                setCityName(event.target.value);
            }}/>
            <button type="submit" className="btn btn-secondary submit-button">Search</button>

        </form>
    )
};

export default InputBox;