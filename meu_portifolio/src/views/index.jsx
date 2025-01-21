import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import diegoImg from "../images/d22.jpg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal } from "bootstrap";
import ModalWebRide from "../components/Modais/ModalWebRide";
import ModalCarsDealerApp from "../components/Modais/ModalCarsDealer";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import ProjectsCarrousel from "../components/Carrousel/ProjectsCarrousel";

function Home() {
  const handleOpenModal = (id) => {
    const modal = new Modal(document.getElementById(id));
    modal.show();
  };
  return (
    <div>
      <div className="main">
        <PersonalInfo />

        <div className="imageDiv">
          <img
            src={diegoImg}
            alt="Texto alternativo da imagem"
            className="img-perfil"
          />
        </div>
      </div>
      <ProjectsCarrousel />

      <ModalWebRide handleOpenModal={handleOpenModal}></ModalWebRide>
      <ModalCarsDealerApp
        handleOpenModal={handleOpenModal}
      ></ModalCarsDealerApp>
    </div>
  );
}

export default Home;
