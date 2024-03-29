import DataImage from './DataImage';
import style from '../styles/Mydata.module.css';

export default function MyData() {
  const urlImages =
    'https://myimages.carlosgperez.com/portfolio/projects/work.webp';
  return (
    <section id="myData" className={`${style.myData}`}>
      <div className={style.myData_header}>
        <h1>Carlos Gerardo Pérez Horta</h1>
        <h2>Software Developer especialista en Frontend</h2>
      </div>
      <div className={`${style.myDescription}`}>
        <p>
          +6 años de experiencia en el desarrollo Frontend, algunas de las
          tecnologías que manejo son <b>JavaScript</b>, <b>ReactJS</b>, HTML,
          CSS, WordPress, entre otras.
        </p>
        <p>
          Me he desempeñado en el rubro bancario como en el de marketing
          digital.
        </p>
        <p>
          Soy autodidacta, busco adaptarme rápidamente a los cambios y dispuesto
          a aprender nuevas tecnologías.
        </p>
      </div>
      <div>
        <DataImage
          src={urlImages}
          alt="Imagen de trabajo"
          widthImage={300}
          heightImage={227}
        />
      </div>
    </section>
  );
}
