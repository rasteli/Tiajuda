import styles from "./styles.module.scss"

interface SignupFormProps {
  isOpen: boolean
  toggleSignupForm(): void
}

export function SignupForm({ isOpen, toggleSignupForm }: SignupFormProps) {
  if (!isOpen) return null

  return (
    <>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h2>CADASTRO</h2>
        <button onClick={toggleSignupForm} className={styles.closeBTN}>
          &times;
        </button>

        <form>
          <div className={styles.inputBlock}>
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.inputBlock}>
            <input type="password" placeholder="Senha" />
          </div>
          <div className={styles.inputBlock}>
            <input type="password" placeholder="Confirmar senha" />
          </div>
          <div className={styles.inputBlock}>
            <input type="text" placeholder="Nome completo" />
          </div>
          <div className={styles.inputBlock}>
            <input type="tel" placeholder="Telefone" />
          </div>
          <div className={styles.inputBlock}>
            <input type="text" placeholder="Endereço (rua, bairro, número)" />
          </div>

          <div className={styles.buttons}>
            <button type="button" onClick={toggleSignupForm}>
              Cancelar
            </button>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </>
  )
}
