import { arrayText } from '../lib/utils';
import style from '../styles/DataProject.module.css';
import DataImage from './DataImage';
import ButtonLink from './ButtonLink';

export default function DataProject({ dataProject }) {
  const { description, project_images, link, repository, technologies } =
    dataProject;
  const { name_images, url_images, ...data } = project_images[0];
  data.description = `Imagen del sitio ${name_images}`;

  const arrayTextFilter = arrayText(description);

  return (
    <div className={style.dataProject}>
      <div className={style.images}>
        <DataImage
          src={url_images}
          alt={`Imagen prinicipal del proyecto ${name_images}`}
          widthImage={1200}
          heightImage={2600}
        />
      </div>
      <div className={style.info}>
        {arrayTextFilter.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <div className={style.contList}>
          <ul>
            {technologies.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className={style.contLinks}>
          {link.length > 0 ? <ButtonLink link={link} nameLink={'Web'} /> : null}
          {repository.length > 0 ? (
            <ButtonLink link={repository} nameLink={'Repositorio'} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
