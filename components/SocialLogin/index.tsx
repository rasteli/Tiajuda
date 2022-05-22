import Image from "next/image"
import styles from "./styles.module.scss"

import google from "../../public/google.svg"
import facebook from "../../public/facebook.svg"

interface SocialLoginProps {
  login: "google" | "facebook"
}

export function SocialLogin({ login }: SocialLoginProps) {
  const loginOptions = {
    google,
    facebook
  }

  return (
    <button className={styles.container}>
      <Image src={loginOptions[login]} />
      Entrar com {login}
    </button>
  )
}
