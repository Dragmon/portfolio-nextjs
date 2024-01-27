import style from '../styles/Technologies.module.css';
import DataImage from './DataImage';

export default function Technologies({ items }) {
  return (
    <section
      id="technologySection"
      className={`${style.technologySection} ${'blockInfo'}`}
    >
      <div className={style.titleSection}>
        <h2>Tecnologías</h2>
      </div>
      <div className={style.contTechnologies}>
        {items.map((item) => (
          <DataImage
            key={item.id}
            src={item.url_images}
            alt={item.description}
            widthImage={150}
            heightImage={150}
          />
        ))}
      </div>
    </section>
  );
}
