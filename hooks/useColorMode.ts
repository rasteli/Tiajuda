import { useTheme } from "../contexts/ThemeContext"

import logoDark from "../public/logo_dark.png"
import logoLight from "../public/logo_light.png"

import switchDark from "../public/switch_dark_logos.svg"
import switchLight from "../public/switch_light_logos.svg"

export function useColorMode() {
  const { isDarkMode } = useTheme()

  const logo = isDarkMode ? logoDark : logoLight
  const switchBTN = isDarkMode ? switchDark : switchLight

  const textColor = isDarkMode ? "#f8f8f2" : "#282a36"
  const bgColor = isDarkMode ? "#282a36" : "#f8f8f2"

  return { logo, switchBTN, textColor, bgColor }
}
