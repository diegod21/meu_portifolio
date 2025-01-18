import { faCss3Alt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CarsDealerCarrousel() {
  return (
    <div className="carousel slide" id="CarroselCars">
      <a href="https://github.com/diegod21/CarDelaerApp/">
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
                Um projeto desenvolvido com React.js, Next.js e Tailwind CSS,
                integrado a uma API externa para buscas. Permite a seleção de
                uma marca e ano para filtrar e exibir todos os veículos
                fabricados por essa marca no ano escolhido.
              </p>
              <p>
                <a href="https://github.com/diegod21/CarDelaerApp/">App</a>
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
              <FontAwesomeIcon
                icon={faReact}
                style={{ fontSize: "32px", margin: "0 10px" }}
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg"
                alt="Tailwind CSS"
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "0 10px",
                  marginBottom: "5px",
                }}
              />
              {/* Next.js Icon */}
              <img
                src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                alt="Next.js"
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "0 10px",
                  marginBottom: "5px",
                }}
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-75 carrosel f4"></div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-75 carrosel f5"></div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-target="#CarroselCars"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#CarroselCars"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </a>
    </div>
  );
}

export default CarsDealerCarrousel;
