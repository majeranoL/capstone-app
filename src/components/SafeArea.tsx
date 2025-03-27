import type React from "react"
import { isPlatform } from "@ionic/react"

interface SafeAreaProps {
  children: React.ReactNode
}

const SafeArea: React.FC<SafeAreaProps> = ({ children }) => {
  const safeAreaStyle = {
    paddingTop: isPlatform("ios") ? "var(--ion-safe-area-top, 0)" : "0",
    paddingBottom: isPlatform("ios") ? "var(--ion-safe-area-bottom, 0)" : "0",
  }

  return <div style={safeAreaStyle}>{children}</div>
}

export default SafeArea

