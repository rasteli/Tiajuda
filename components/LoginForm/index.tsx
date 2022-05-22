import styles from "./styles.module.scss"
import { SocialLogin } from "../SocialLogin"

export function LoginForm() {
  return (
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
          <button type="button">Cadastro</button>
          <button type="submit">Login</button>
        </div>

        <div className={styles.socialButtons}>
          <SocialLogin login="google" />
          <SocialLogin login="facebook" />
        </div>
      </form>
    </div>
  )
}
