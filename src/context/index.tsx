import { createContext, useContext } from "react"
import { useUploaderFunctions } from "../hooks/useUploaderFunctions"
import { IReactUploader, UploaderContext } from "../types"

const uploaderContext = createContext<UploaderContext | null>(null)

type ProviderType = {
  children: JSX.Element,
} & Partial<IReactUploader>

const UploaderProvider = (props: ProviderType) => {
  const config: UploaderContext = {
    ...useUploaderFunctions({
      setImages: props.setImages,
      setRemovedImages: props.setRemovedImages,
    }),
    images: props.images || [],
  }

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
