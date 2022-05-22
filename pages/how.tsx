import Head from "next/head"
import { useEffect } from "react"

import { Header } from "../components/Header"
import { How } from "../components/How"
import { Footer } from "../components/Footer"
import { useColorMode } from "../hooks/useColorMode"

export default function HowPage() {
  const { bgColor } = useColorMode()

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])

  return (
    <div>
      <Head>
        <title>Tiajuda — como funcionamos</title>
        <meta name="description" content="Saiba mais o que fazemos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <How />
      <Footer />
    </div>
  )
}
