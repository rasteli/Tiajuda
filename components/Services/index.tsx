import Image from "next/image"
import styles from "./styles.module.scss"

import remoto from "../../public/remoto.png"
import presencial from "../../public/presencial.png"

import { Course } from "../Course"
import { useTheme } from "../../contexts/ThemeContext"
import { useColorMode } from "../../hooks/useColorMode"

export function Services() {
  const { isDarkMode } = useTheme()
  const { textColor } = useColorMode()

  return (
    <div className={styles.container}>
      <div style={{ color: textColor }}>
        <h1>SERVIÇOS</h1>
        <p>
          Possui alguma dificuldade com aparelhos eletrônicos?
          <br />
          <span>Marque uma consulta</span> conosco <span>AGORA!</span>
        </p>

        <div className={styles.customerCare}>
          <div>
            <Image src={remoto} />
            CONSULTA REMOTA
          </div>
          <div>
            <Image src={presencial} />
            CONSULTA PRESENCIAL
          </div>
        </div>

        <h2>CURSOS DISPONÍVEIS</h2>
        <div
          className={styles.courses}
          style={{ backgroundColor: isDarkMode ? "#22232e" : "#fff" }}
        >
          <Course
            desc="Mobile/Tablet"
            price={20}
            advantages={["Duração de 3 meses", "Acesso às vídeo-aulas"]}
          />
          <Course
            desc="Computador/Laptop"
            price={30}
            advantages={["Duração de 3 meses", "Acesso às vídeo-aulas"]}
          />
          <Course
            isUltimate
            price={45}
            advantages={["Duração de 3 meses", "Acesso às vídeo-aulas"]}
          />
        </div>
      </div>
    </div>
  )
}
