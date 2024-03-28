import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '../styles/Menu.module.css';
import IconHome from './Icons/IconHome';
import IconBlog from './Icons/IconBlog';
import IconPortfolio from './Icons/IconPortfolio';
import IconReturn from './Icons/IconReturn';
import { useEffect, useState } from 'react';

export default function Menu() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [activeReturn, setActiveReturn] = useState(false);

  useEffect(() => {
    if (currentPath === '/[name_project]') {
      setActiveReturn(true);
    } else {
      setActiveReturn(false);
    }
  }, [currentPath, activeReturn]);

  return (
    <div id="ContMenu" className={style.contMenu}>
      <div className={style.menu}>
        <div className={style.navigation}>
          <nav>
            <ul>
              {activeReturn ? (
                <li>
                  <IconReturn fill="#0050F" onClick={() => router.back()} />
                </li>
              ) : null}
              <li>
                <Link
                  href="/#myData"
                  aria-label="link para ir a la sección de la descripción"
                  scroll={false}
                >
                  <IconHome fill="#00050F" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#projectSection"
                  aria-label="link para ir a la sección de los proyectos"
                  scroll={false}
                >
                  <IconPortfolio fill="#00050F" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.charliegperez.com/"
                  aria-label="link para ir al blog"
                  scroll={false}
                  target="_blank"
                >
                  <IconBlog fill="#00050F" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
