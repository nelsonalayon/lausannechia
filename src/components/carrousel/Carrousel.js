import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import photos from "../../json/imagesChiaHouse.json";
import CarrouselItems from "../elCarrousel/carrouselItems";

const Carrousel = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      padding: 2000     
    });
  });
  return (
    <div className="carousel">
      <CarrouselItems photos={photos} />
    </div>
  );
};

export default Carrousel;
