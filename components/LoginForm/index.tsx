import { useState } from "react"
import styles from "./styles.module.scss"

import { SignupForm } from "../SignupForm"
import { SocialLogin } from "../SocialLogin"

export function LoginForm() {
  const [signupIsOpen, setSignupIsOpen] = useState(false)

  function toggleSignupForm() {
    setSignupIsOpen(prevState => {
      document.body.style.overflow = prevState ? "unset" : "hidden"

      return !prevState
    })
  }

  return (
    <>
      <div className={styles.container} id="form">
        <h2>LOGIN</h2>
        <form>
          <div className={styles.inputBlock}>
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.inputBlock}>
            <input type="password" placeholder="Senha" />
          </div>

          <span className={styles.forgotPassword}>Esqueci a senha</span>

          <div className={styles.buttons}>
            <button type="button" onClick={toggleSignupForm}>
              Cadastro
            </button>
            <button type="submit">Login</button>
          </div>

          <div className={styles.socialButtons}>
            <SocialLogin login="Google" />
            <SocialLogin login="Facebook" />
          </div>
        </form>
      </div>

      <SignupForm isOpen={signupIsOpen} toggleSignupForm={toggleSignupForm} />
    </>
  )
}
