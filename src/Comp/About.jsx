import React from "react";
import Header from "./Header";
import "../Css/style.css";

export default function About() {
  return (
    <>
      <Header />
      <div className="about-section black-bg">
        <div className="about-main">
          <div className="about-text">
            <h1>about.</h1>
            <p className="subtitle">Brand sepatu dari Indonesia</p>
            <p className="description">
              Sejak 2025, <strong>SNEL</strong> hadir sebagai brand sepatu lokal yang mengutamakan
              <strong> kecepatan </strong> dan <strong> kenyamanan</strong>. 
              Kami percaya bahwa sepatu bukan hanya soal gaya, tetapi juga performa.
              Saat tidak sedang mendesain sepatu, kami menikmati inovasi dan interaksi dengan komunitas pecinta olahraga.
            </p>
          </div>

          <div className="about-image">
            <img src="imgs/img/snel1.png" alt="Model SNEL Biru" />
          </div>
        </div>

        <div className="about-gallery">
          <img src="imgs/img/2.png" alt="SNEL Blue" />
          <img src="imgs/img/3.png" alt="SNEL White" />
          <img src="imgs/img/4.png" alt="SNEL Blue" />
          <img src="imgs/img/5.png" alt="SNEL White" />
        </div>
      </div>
    </>
  );
}
