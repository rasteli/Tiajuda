import Head from "next/head"
import { useEffect } from "react"

import { Header } from "../components/Header"
import { Services } from "../components/Services"
import { Footer } from "../components/Footer"
import { useColorMode } from "../hooks/useColorMode"

export default function ServicesPage() {
  const { bgColor } = useColorMode()

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])

  return (
    <div>
      <Head>
        <title>Tiajuda — serviços</title>
        <meta
          name="description"
          content="Atendimento presencial ou remote e cursos técnicos específicos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Services />
      <Footer />
    </div>
  )
}
