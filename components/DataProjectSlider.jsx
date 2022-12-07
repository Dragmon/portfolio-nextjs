import { arrayText } from '../lib/utils';
import Slider from './Slider';
import ButtonLink from './ButtonLink';
import style from '../styles/DataProject.module.css';
export default function DataProjectSlider({ dataProject }) {
  const { description, project_images, link, repository, technologies } =
    dataProject;

  const arrayTextFilter = arrayText(description);

  return (
    <div>
      <Slider images={project_images} />
      <section className={'spaceSection'}>
        <>
          {arrayTextFilter.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </>
        <div className={style.contList}>
          <ul>
            {technologies.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className={style.contLinks}>
          <ButtonLink link={link} nameLink={'Web'} />
          {repository.length > 0 ? (
            <ButtonLink link={repository} nameLink={'Repositorio'} />
          ) : null}
        </div>
      </section>
    </div>
  );
}
