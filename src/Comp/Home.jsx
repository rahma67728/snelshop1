import React from "react";
import Header from "./Header";

export default function Home(){

    return(
        <div id="Home">
            <Header/>
            <div className="bodyDiv">
                <div className="textP">
                    <h1>SNEL PREMIUM SHOES</h1>
                </div>
                <div className="shoeE">
                    <img src="imgs/img/sepatu.png" alt="shoe"/>
                </div>
            </div>
        </div>
    )
}