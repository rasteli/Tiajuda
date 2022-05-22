import Image from "next/image"
import styles from "./styles.module.scss"

import headeset from "../../public/headset.svg"
import headesetBTN from "../../public/headset_btn.svg"

import { useViewport } from "../../hooks/useViewport"
import { useColorMode } from "../../hooks/useColorMode"

export function Support() {
  const { textColor } = useColorMode()
  const { aboveThreshold } = useViewport(540)

  return (
    <div className={styles.container}>
      <div style={{ color: textColor }}>
        <h1>SUPORTE</h1>
        <p>
          Gostaria de reportar algum assunto ocorrente?{" "}
          <span>Clique abaixo e fale conosco!</span>
        </p>

        <div className={styles.wrapper}>
          <button className={styles.callBTN}>
            <Image src={headesetBTN} />
          </button>
        </div>
      </div>

      {aboveThreshold && <Image src={headeset} />}
    </div>
  )
}
