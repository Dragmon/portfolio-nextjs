import style from '../styles/SocialMedia.module.css';
import IconEmail from './Icons/IconEmail';
import IconGithub from './Icons/IconGithub';
import IconLinkedin from './Icons/IconLinkedin';

export default function SocialMedia() {
  return (
    <div className={style.socialMedia}>
      <a
        href="mailto: carlos.perez@charliegperez.com"
        target="_blank"
        rel="noreferrer"
      >
        <IconEmail className={style.icon} />
      </a>
      <a href="https://github.com/Dragmon" target="_blank" rel="noreferrer">
        <IconGithub className={style.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/charliegperez/"
        target="_blank"
        rel="noreferrer"
      >
        <IconLinkedin className={style.icon} />
      </a>
    </div>
  );
}
