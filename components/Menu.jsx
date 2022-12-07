import { useRouter } from 'next/router';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { PAGE_TRANSITION } from '../lib/pageTransition';
import Link from 'next/link';
import style from '../styles/Menu.module.css';
import IconHome from './Icons/IconHome';
import IconTools from './Icons/Icontools';
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

  const pageMotionProps = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: PAGE_TRANSITION.DURATION,
        ease: PAGE_TRANSITION.EASE,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: PAGE_TRANSITION.DURATION,
        delay: PAGE_TRANSITION.DURATION,
        ease: PAGE_TRANSITION.EASE,
      },
    },
  };

  return (
    <div id="ContMenu" className={style.contMenu}>
      <div className={style.menu}>
        <div className={style.navigation}>
          <nav>
            <ul>
              {activeReturn ? (
                <LazyMotion features={domAnimation}>
                  <m.li {...pageMotionProps}>
                    <IconReturn fill="#0050F" onClick={() => router.back()} />
                  </m.li>
                </LazyMotion>
              ) : null}
              <li>
                <Link href="/#myData" scroll={false}>
                  <IconHome fill="#00050F" />
                </Link>
              </li>
              <li>
                <Link href="/#technologySection" scroll={false}>
                  <IconTools fill="#00050F" />
                </Link>
              </li>
              <li>
                <Link href="/#projectSection" scroll={false}>
                  <IconPortfolio fill="#00050F" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
