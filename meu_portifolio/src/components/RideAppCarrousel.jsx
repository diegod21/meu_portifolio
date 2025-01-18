import { faCss3Alt, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RideAppCarrousel() {
  return (
    <div className="carousel slide" id="meuCarousel">
      <a href="https://diegod21.github.io/ride-app/">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: "500px" }}>
            <div
              style={{
                backgroundColor: "#fff",
                textAlign: "center",
                margin: "auto",
                border: "0.5px solid #000",
                borderRadius: "5px",
                width: "60%",
                marginTop: "20%",
              }}
            >
              <p>
                O WebRide é uma plataforma de rastreamento GPS que oferece
                recursos avançados para a prática de atividades ao ar livre. Com
                ele, você pode registrar e analisar detalhadamente seus trajetos
                ou treinos, obtendo dados precisos sobre velocidade, distância e
                outros parâmetros relevantes. A plataforma permite salvar seus
                dados.
              </p>
              <p>
                <a href="https://diegod21.github.io/ride-app/">App</a>
              </p>
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
          <div className="carousel-item">
            <div className="d-block w-50 carrosel webRide f3"></div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-50 carrosel webRide f2 "></div>
          </div>
          <div className="carousel-item ">
            <div className="d-block w-50 carrosel webRide f1"></div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-50 carrosel webRide"></div>
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
      </a>
    </div>
  );
}
export default RideAppCarrousel;
