import cls from 'classnames';
import Link from "next/link";
import Image from "next/image";
import styles from './card.module.css';

const Card = ({href, name, imgUrl}) => {
  return (
    <Link href={href} className={styles.cardLink}>
        <div className={cls('glass',styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h3 className={styles.cardHeader}>{ name }</h3>
            <Image className={styles.cardImage} src={imgUrl} width={260} height={160} alt="coffee stores"/>
          </div>
        </div>
    </Link>
  )
}

export default Card
