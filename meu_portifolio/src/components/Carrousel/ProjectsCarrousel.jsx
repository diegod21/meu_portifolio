import { Modal } from "bootstrap";
import WebRideItem from "../CarrousselItens/WebRideItem";
import CarsDealerItem from "../CarrousselItens/CarsDealerItem"; 

function ProjectsCarrousel() {
  const handleOpenModal = (id) => {
    const modal = new Modal(document.getElementById(id));
    modal.show();
  };
  return (
    <div className="carousel slide" id="meuCarousel">
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          onClick={() => handleOpenModal("modalWebRide")}
        >
          <div>
            <WebRideItem handleOpenModal={handleOpenModal} />
          </div>
        </div>
        <div
          className="carousel-item"
          onClick={() => handleOpenModal("modalCarsDealerApp")}
        >
         <CarsDealerItem handleOpenModal={handleOpenModal} />
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
  );
}

export default ProjectsCarrousel;
