import Image from "next/image"
import styles from "./styles.module.scss"

import { useTheme } from "../../contexts/ThemeContext"
import { useColorMode } from "../../hooks/useColorMode"

export function Header() {
  const { toggleDarkMode } = useTheme()
  const { logo, switchBTN, bgColor } = useColorMode()

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
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

      <Image src={switchBTN} onClick={toggleDarkMode} />
    </div>
  )
}
