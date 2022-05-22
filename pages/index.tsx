import Head from "next/head"
import { useEffect } from "react"

import { Header } from "../components/Header"
import { Landing } from "../components/Landing"
import { Footer } from "../components/Footer"

import { useColorMode } from "../hooks/useColorMode"

export default function Home() {
  const { bgColor } = useColorMode()

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])

  return (
    <div>
      <Head>
        <title>Tiajuda — soluções técnicas</title>
        <meta name="description" content="Solução técnica para quem precisa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Landing />
      <Footer />
    </div>
  )
}
