import Image from "next/image"
import styles from "./styles.module.scss"
import bulb from "../../public/bulb.png"

import { useViewport } from "../../hooks/useViewport"
import { useColorMode } from "../../hooks/useColorMode"

export function About() {
  const { textColor } = useColorMode()
  const { aboveThreshold } = useViewport(540)

  return (
    <div className={styles.container}>
      <div style={{ color: textColor }}>
        <h1>SOBRE NÓS</h1>
        <p>
          Com o <span>avanço da tecnologia</span>, muitos idosos se sentiram
          abandonados, acarretando a desistência de entrar no mundo digital e
          ficando isolados das novas tecnologias. Com isso em mente, o time da
          Ti
          <span>ajuda</span> criou uma solução:
        </p>
        <div className={styles.solution}>
          Um <span>auxílio técnico</span> especializado para os velhinhos,
          podendo ser <span>remoto</span> ou <span>presencial</span>, além de
          oferecer pequenos cursos com instruções orientadas para eles.
        </div>

        <p>
          O time é composto por graduandos de Ciência da Computação e Design
          Gráfico do <span>Centro Universitário Barão de Mauá.</span>
        </p>
      </div>

      {aboveThreshold && <Image src={bulb} />}
    </div>
  )
}
