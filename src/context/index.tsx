import { createContext, useContext } from "react"
import { useUploaderFunctions } from "../hooks/useUploaderFunctions"
import { UploaderContext } from "../types"

const uploaderContext = createContext<UploaderContext | null>(null)

type ProviderType = {
  children: JSX.Element,
}

const UploaderProvider = (props: ProviderType) => {
  const config: UploaderContext = useUploaderFunctions()

  return (
    <uploaderContext.Provider value={config}>
      {props.children}
    </uploaderContext.Provider>
  )
}

export { UploaderProvider, uploaderContext }

export default function useUploaderContext() {
  const context = useContext(uploaderContext)
  if (!context) {
    throw new Error("useUploaderContext must be used within a UploaderProvider")
  }
  return context
}
