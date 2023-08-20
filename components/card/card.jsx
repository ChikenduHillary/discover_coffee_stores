import Link from "next/link";
import Image from "next/image";

const Card = ({href, name, imgUrl}) => {
  return (
    <Link href={href}>
            <h2>{ name }</h2>
            <Image src={imgUrl} width={260} height={160} alt="coffee stores"/>
    </Link>
  )
}

export default Card
