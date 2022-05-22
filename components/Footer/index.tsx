import Image from "next/image"
import styles from "./styles.module.scss"

import instagram from "../../public/instagram.svg"
import facebook from "../../public/facebook_footer.svg"

export function Footer() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="">Sobre nós</a>
        </li>
        <li>
          <a href="">Como funcionamos</a>
        </li>
        <li>
          <a href="">Serviços</a>
        </li>
        <li>
          <a href="">Suporte</a>
        </li>
      </ul>
      <div className={styles.socialMedia}>
        <span>Redes Sociais</span>
        <div>
          <a href="https://www.instagram.com/tiajudaofc/">
            <Image src={instagram} />
          </a>
          <a href="https://www.instagram.com/tiajudaofc/">
            <Image src={facebook} />
          </a>
        </div>
      </div>

      <span className={styles.copy}>&copy;Tiajuda</span>
    </div>
  )
}
