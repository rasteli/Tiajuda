import Image from "next/image"
import styles from "./styles.module.scss"

import idoso from "../../public/idoso.png"
import { LoginButton } from "../LoginButton"
import { LoginForm } from "../LoginForm"

export function Landing() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcome}>
          <h1>
            Bem-vindos ao Ti<span>ajuda</span>,
          </h1>
          <p>
            uma plataforma que o ajudará a resolver o seu problema em{" "}
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
