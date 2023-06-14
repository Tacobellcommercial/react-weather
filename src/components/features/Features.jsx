import React from "react";
import Credits from "./Credits.jsx";

function Features(){
    return(
        <div className="features-section">
            <h1>What We Offer</h1>
            <div className="row">
                <div className="col-lg-4">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    <h2>Fast</h2>
                    <p>Always fast, with the best up to date code.</p>
                </div>
                <div className="col-lg-4">
                    <i class="fa-solid fa-bullseye"></i>
                    <h2>Accuracy</h2>
                    <p>Information will always be for sure accurate.</p>
                </div>
                <div className="col-lg-4">
                    <i class="fa-solid fa-check"></i>
                    <h2>Reliability</h2>
                    <p>Rest assured that this React app is hosted reliably.</p>
                </div>
            </div>
            <Credits/>
        </div>
    )
};

export default Features;