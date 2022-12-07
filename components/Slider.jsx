import { Carousel } from 'react-responsive-carousel';
import style from '../styles/Slider.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slider({ images }) {
  return (
    <section className={style.sliderSection}>
      <Carousel autoPlay infiniteLoop>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url_images} />
            <p className="legend">{image.name_images}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
