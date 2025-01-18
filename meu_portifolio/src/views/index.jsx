import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import diegoImg from "../images/d22.jpg";
import "../App.css";
import MainContent from "../components/MainContent";
import RideAppCarrousel from "../components/RideAppCarrousel";
import CarsDealerCarrousel from "../components/CarsDealerCarrousel";

function Home() {
  return (
    <div className="app">
      <div className="mainInfo">

        <div className="mainContent">
          <MainContent />
        </div>
        
      </div>
      <div className="scroll">
        <div className="content uno">
          <img
            src={diegoImg}
            alt="Texto alternativo da imagem"
            className="img-perfil"
          />
        </div>
        <div
          className="content projects"
          style={{ backgroundColor: "#8C8C8C" }}
        >
          <RideAppCarrousel />
        </div>
        <div
          className="content projects"
          style={{ backgroundColor: "#595959" }}
        >
          <CarsDealerCarrousel />
        </div>
      </div>
    </div>
  );
}

export default Home;
