import DataImage from './DataImage';
import style from '../styles/Card.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Card({ data }) {
  return (
    <Link
      href={{
        pathname: '/[name_project]',
        query: { name_project: data.url_name_project },
      }}
    >
      <motion.div
        className={style.contCard}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 50 }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className={style.dataImage}>
          <DataImage
            className={style.imagesCard}
            key={data.id}
            data={data}
            widthImage={550}
            heightImage={250}
          />
        </div>
        <div className={style.introCard}>
          <h3>{data.name_project}</h3>
        </div>
      </motion.div>
    </Link>
  );
}
