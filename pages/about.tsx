import Head from "next/head"
import { useEffect } from "react"

import { Header } from "../components/Header"
import { About } from "../components/About"
import { Footer } from "../components/Footer"
import { useColorMode } from "../hooks/useColorMode"

export default function AboutPage() {
  const { bgColor } = useColorMode()

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <About />
      <Footer />
    </div>
  )
}
