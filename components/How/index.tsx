import Link from "next/link"
import Image from "next/image"
import styles from "./styles.module.scss"
import bulb from "../../public/bulb.png"

import { useViewport } from "../../hooks/useViewport"
import { useColorMode } from "../../hooks/useColorMode"

export function How() {
  const { textColor } = useColorMode()
  const { aboveThreshold } = useViewport(540)

  return (
    <div className={styles.container}>
      <div style={{ color: textColor }}>
        <h1>COMO FUNCIONAMOS</h1>
        <p>
          Com <span>apenas um clique</span>, iremos resolver o problema! A Ti
          <span>ajuda</span> oferece serviços de atendimento técnico
          especializado de maneira <span>remota</span> ou{" "}
          <span>presencial</span>.
        </p>
        <p>
          Nosso cliente pode contratar um atendimento remoto{" "}
          <span>via chamada de voz</span> e será atendido o mais breve possível.
          Ao agendar um atendimento presencial, ele poderá escolher{" "}
          <span>se dirigir ao estabelecimento</span> Ti
          <span>ajuda</span> mais próximo ou <span>receber o técnico</span> em
          sua própria casa.
        </p>
        <p>
          A Ti<span>ajuda</span> também oferece{" "}
          <span>cursos técnicos específicos</span> para os velhinhos que buscam{" "}
          <span>se aprofundar</span> na utilização de seus dispositivos.
        </p>
        Se interessou?{" "}
        <Link href="/services">Contrate um de nossos serviços!</Link>
      </div>
    </div>
  )
}
