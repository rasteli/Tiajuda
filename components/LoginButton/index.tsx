import styles from "./styles.module.scss"

export function LoginButton() {
  function scrollToForm() {
    document.getElementById("form").scrollIntoView()
  }

  return (
    <button className={styles.container} onClick={scrollToForm}>
      FAÇA SEU LOGIN
    </button>
  )
}
