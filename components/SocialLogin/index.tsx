import Image from "next/image"
import styles from "./styles.module.scss"

import Google from "../../public/google.svg"
import Facebook from "../../public/facebook.svg"

interface SocialLoginProps {
  login: "Google" | "Facebook"
}

export function SocialLogin({ login }: SocialLoginProps) {
  const loginOptions = {
    Google,
    Facebook
  }

  return (
    <button className={styles.container}>
      <Image src={loginOptions[login]} />
      Entrar com {login}
    </button>
  )
}
