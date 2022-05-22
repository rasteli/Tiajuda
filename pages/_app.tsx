import type { AppProps } from "next/app"
import "../styles/globals.css"

import { ThemeContextProvider } from "../contexts/ThemeContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
