import { Price } from "../Price"
import styles from "./styles.module.scss"

interface CourseProps {
  desc?: string
  advantages: string[]
  isUltimate?: boolean
  price: number
}

export function Course({ desc, advantages, price, isUltimate }: CourseProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        {isUltimate ? "Pacote Universal" : "Pacote"}
      </span>
      <span className={styles.desc}>
        {isUltimate ? "(Todos os cursos)" : desc}
      </span>

      <ul>
        {advantages.map((adv, index) => (
          <li key={index}>
            <div className={styles.arrowRight}></div> {adv}
          </li>
        ))}
      </ul>

      <Price price={price} />
      <button>COMPRAR</button>
    </div>
  )
}
