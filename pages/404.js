import Image from 'next/image';
import style from '../styles/404.module.css';
import images404 from '../components/Images/Images_404.png';

export default function Custom404() {
  return (
    <section className={style.sectionPageNotExist}>
      <div className={style.titlePageNotExist}>
        <h2>404 - Esta página no existe</h2>
      </div>
      <div className={style.imagePageNoExist}>
        <Image
          src={images404}
          alt="Images 404 la página no existe"
          width={250}
          height={300}
          layout="responsive"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB7dFBAQAgDAChaf+CS6M17gEVOLv7how7pAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERLzAUQiBFLCCwmOAAAAAElFTkSuQmCC"
        />
      </div>
    </section>
  );
}
