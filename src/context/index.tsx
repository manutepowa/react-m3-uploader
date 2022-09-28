import { createContext, useContext } from "react"
import { UploaderContext } from "../types"

const uploaderContext = createContext<UploaderContext>({})

type ProviderType = {
  children: JSX.Element,
} & UploaderContext

const UploaderProvider = (props: ProviderType) => {
  return (
    <uploaderContext.Provider value={{}}>
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
