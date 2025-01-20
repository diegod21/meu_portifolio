import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import diegoImg from "../images/d22.jpg";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import MainContent from "../components/MainContent";
import RideAppCarrousel from "../components/RideAppCarrousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarsDealerCarrousel from "../components/CarsDealerCarrousel";
import imgProj from "../images/Screenshot_2024-01-13-17-33-41-657_com.android.chrome.jpg";
import { Modal } from "bootstrap";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import ModalWebRide from "../components/ModalWebRide";
import ModalCarsDealerApp from "../components/ModalCarsDealer";
function Home() {
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content, id) => {
    setModalContent(content);
    const modal = new Modal(document.getElementById(id));
    modal.show();
  };
  return (
    <div>
      <div className="main">
        <div className="personalInfo">
          <div>
            <div className="">
              <h1>Olá Eu Sou Diego Carvalho</h1>
            </div>
            <div className="">
              Eu Sou Diego. Eu Crio Sistemas Web
              <br />
              Usando Modernas Tecnologias.
              <br />
              <div>
                <FontAwesomeIcon
                  icon={faJs}
                  style={{ fontSize: "50px", margin: "0 10px" }}
                />
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ fontSize: "50px", margin: "0 10px" }}
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
                  alt="TypeScript"
                  style={{ width: "52px", height: "52px", margin: "0 10px" }}
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                  alt="Redux"
                  style={{ width: "52px", height: "52px", margin: "0 10px" }}
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                  alt="Node.js"
                  style={{ width: "52px", height: "52px", margin: "0 10px" }}
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg"
                  alt="Tailwind CSS"
                  style={{
                    width: "52px",
                    height: "52px",
                    margin: "0 10px",
                    marginBottom: "5px",
                  }}
                />
                <img
                  src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                  alt="Next.js"
                  style={{
                    width: "52px",
                    height: "52px",
                    margin: "0 10px",
                    marginBottom: "5px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="button" style={{ alignSelf: "center" }}>
            Vamos Trabalhar Juntos!
          </div>
          <div className="footer">
            <p>
              Me Encontre No <a href="https://github.com/diegod21/">GitHub</a>{" "}
              and{" "}
              <a href="https://www.linkedin.com/in/diego-carvalho-d3003/">
                Linkedin
              </a>
              <br />
              Baixe Meu Currículo
            </p>
          </div>
        </div>

        <div className="imageDiv">
          <img
            src={diegoImg}
            alt="Texto alternativo da imagem"
            className="img-perfil"
          />
        </div>
      </div>
      <div className="carousel slide" id="meuCarousel">
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            onClick={() => handleOpenModal("Conteúdo do projeto WebRide", "modalWebRide")}
          >
            <div
              style={{
                backgroundColor: "#fff",
                textAlign: "center",
                margin: "auto",
                border: "0.5px solid #000",
                borderRadius: "5px",
                width: "60%",
                marginBottom: "8%",
                height: "200px",
              }}
            >
              <p>
                O <strong>WebRide</strong> é uma plataforma de rastreamento GPS
                que oferece recursos avançados para a prática de atividades ao
                ar livre. Com ele, você pode registrar e analisar detalhadamente
                seus trajetos ou treinos, obtendo dados precisos sobre
                velocidade, distância e outros parâmetros relevantes. A
                plataforma permite salvar seus dados.
              </p>
              {/* <button className="btn btn-primary" onClick={() => handleOpenModal('Conteúdo do projeto WebRide')}>
                Ver Mais
              </button> */}
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ fontSize: "32px", margin: "0 10px" }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                style={{ fontSize: "32px", margin: "0 10px" }}
              />
              <FontAwesomeIcon
                icon={faJs}
                style={{ fontSize: "32px", margin: "0 10px" }}
              />
            </div>
          </div>
          <div className="carousel-item" onClick={() => handleOpenModal("Conteúdo do projeto CarsDealerApp", "modalCarsDealerApp")}>
            <div
              style={{
                backgroundColor: "#fff",
                textAlign: "center",
                margin: "auto",
                border: "0.5px solid #000",
                borderRadius: "5px",
                width: "60%",
                marginBottom: "8%",
                height: "200px",
              }}
            >
              <p>
                Um projeto desenvolvido com React.js, Next.js e Tailwind CSS,
                integrado a uma API externa para buscas. Permite a seleção de
                uma marca e ano para filtrar e exibir todos os veículos
                fabricados por essa marca no ano escolhido.
              </p>
              {/* <button className="btn btn-primary" onClick={() => handleOpenModal('Conteúdo do projeto CarsDealerApp')}>
                Ver Mais
              </button> */}
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ fontSize: "32px", margin: "0 10px" }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                style={{ fontSize: "32px", margin: "0 10px" }}
              />
              <FontAwesomeIcon
                icon={faJs}
                style={{ fontSize: "32px", margin: "0 10px" }}
              />
              <FontAwesomeIcon
                icon={faReact}
                style={{ fontSize: "32px", margin: "0 10px" }}
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-target="#meuCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#meuCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Modal */}
      <ModalWebRide handleOpenModal={handleOpenModal}></ModalWebRide>
      <ModalCarsDealerApp handleOpenModal={handleOpenModal}></ModalCarsDealerApp>
    </div>
  );
}

export default Home;
