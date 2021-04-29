import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css";


const Carrousel = () => {
    
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
      });
    return (
        <div className="carousel">
    <a className="carousel-item" href="#one!"><img src="https://www.semana.com/resizer/j42cYUvr34aLn13_CqxlysNH4fM=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/V3EVP6ZUEZFY7AIGESM76I43GE.jpg"/></a>
    <a className="carousel-item" href="#two!"><img src="https://live.staticflickr.com/65535/51144911268_0b79312c70_k.jpg"/></a>
    <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
    <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
    <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
    
  </div>
    )
}

export default Carrousel