import Link from "next/link"
import Image from "next/image"
import styles from "./styles.module.scss"

import { useTheme } from "../../contexts/ThemeContext"
import { useColorMode } from "../../hooks/useColorMode"

import { Routes } from "../Routes"

export function Header() {
  const { toggleDarkMode } = useTheme()
  const { logo, switchBTN, bgColor } = useColorMode()

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <Link href="/">
        <Image src={logo} alt="TiAjuda logo" />
      </Link>

      {/* <!-- Input e label são responsáveis pela responsividade da navbar --> */}
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className={styles.hamburger}>
        &#9776;
      </label>

      <nav>
        <Routes />
      </nav>

      <Image src={switchBTN} onClick={toggleDarkMode} />
    </div>
  )
}
