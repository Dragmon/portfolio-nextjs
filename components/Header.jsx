import SocialMedia from './SocialMedia';
import style from '../styles/Header.module.css';
import Logo from './Logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/">
        <Logo className={style.logo} />
      </Link>
      <SocialMedia />
    </header>
  );
}
