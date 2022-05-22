import Image from "next/image"
import styles from "./styles.module.scss"

import logo from "../../public/logo.png"

export function Header() {
  return (
    <div className={styles.container}>
      <Image src={logo} alt="TiAjuda logo" />
      <nav>
        <ul>
          <li>
            <a href="">Sobre Nós</a>
          </li>
          <li>
            <a href="">Como Funcionamos</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Suporte</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
