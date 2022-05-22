import styles from "./styles.module.scss"

interface PriceProps {
  price: number
}

export function Price({ price }: PriceProps) {
  return (
    <div className={styles.price}>
      R$
      <span className={styles.integer}>{price}</span>,
      <span className={styles.decimal}>00</span>
    </div>
  )
}
