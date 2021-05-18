import "./styles.css";

const CarrouselItems = (props) => {
  return props.photos.chiaHouse.map((photo) => {
    if (photo.id < 5) {
      return (
        <a className="carousel-item" href="#one!" id={photo.id}>
          <img src={photo.image} />
        </a>
      );
    }
  });
};

export default CarrouselItems;
