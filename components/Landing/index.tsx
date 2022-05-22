import Image from "next/image"
import styles from "./styles.module.scss"

import idoso from "../../public/idoso.png"

import { LoginForm } from "../LoginForm"
import { LoginButton } from "../LoginButton"
import { useColorMode } from "../../hooks/useColorMode"

export function Landing() {
  const { textColor } = useColorMode()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcome} style={{ color: textColor }}>
          <h1>
            Bem-vindos ao Ti<span>ajuda</span>
          </h1>
          <p>
            uma plataforma que os ajudará a resolver os seus problemas em{" "}
            <span>celulares</span>, <span>tablets</span> ou{" "}
            <span>computadores</span>.
          </p>
        </div>
        <Image src={idoso} alt="Imagem senhor usando um tablet." />
      </div>
      <div className={styles.login}>
        <LoginButton />
        <LoginForm />
      </div>
    </>
  )
}
