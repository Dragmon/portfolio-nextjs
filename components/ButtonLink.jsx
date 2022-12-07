import style from '../styles/ButtonLink.module.css';

export default function ButtonLink({ link, nameLink }) {
  return (
    <a
      className={style.buttonLink}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{nameLink}</span>
      <i></i>
    </a>
  );
}
