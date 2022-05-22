import Head from "next/head"
import { useEffect } from "react"

import { Header } from "../components/Header"
import { Support } from "../components/Support"
import { Footer } from "../components/Footer"
import { useColorMode } from "../hooks/useColorMode"

export default function SupportPage() {
  const { bgColor } = useColorMode()

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])

  return (
    <div>
      <Head>
        <title>Tiajuda — suporte</title>
        <meta
          name="description"
          content="Entre em contato conosco e sane sua dúvida."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Support />
      <Footer />
    </div>
  )
}
