function ModalCarsDealerApp({ handleOpenModal }) {
  return (
    <div
      className="modal fade"
      id="modalCarsDealerApp"
      tabIndex="-1"
      aria-labelledby="modalCarsDealerAppLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalCarsDealerAppLabel">
              Detalhes do Projeto
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body" style={{ height: "500px" }}>
            <div className="carousel slide" id="webRideCarrosel">
              <div className="carousel-inner">
                <div
                  className="carousel-item active"
                  onClick={() => handleOpenModal("Conteúdo do projeto WebRide")}
                >
                  <div className="f4"></div>
                </div>
                <div className="carousel-item">
                  <div className="f5"></div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                data-bs-target="#webRideCarrosel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  style={{ backgroundColor: "black" }}
                ></span>
              </button>
              <button
                className="carousel-control-next"
                data-bs-target="#webRideCarrosel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  style={{ backgroundColor: "black" }}
                ></span>
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalCarsDealerApp;
