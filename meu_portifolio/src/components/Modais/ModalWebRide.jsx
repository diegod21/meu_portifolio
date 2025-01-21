function ModalWebRide({ handleOpenModal }) {
  return (
    <div
      className="modal fade"
      id="modalWebRide"
      tabIndex="-1"
      aria-labelledby="modalWebRideLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalWebRideLabel">
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
            <div className="carousel slide" id="carsDealerCarrosel">
              <div className="carousel-inner">
                <div
                  className="carousel-item active"
                  onClick={() => handleOpenModal("Conteúdo do projeto WebRide")}
                >
                  <div className="f1"></div>
                </div>
                <div className="carousel-item">
                  <div className="f2"></div>
                </div>
                <div className="carousel-item">
                  <div className="f3"></div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                data-bs-target="#carsDealerCarrosel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                data-bs-target="#carsDealerCarrosel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
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
export default ModalWebRide;
