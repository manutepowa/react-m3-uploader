import React from "react"
import { DefaultFile, IReactUploader } from "../types"

export const useUploaderFunctions = (props: Partial<IReactUploader>) => {
  const [images, setImages] = React.useState<Array<DefaultFile | File>>(
    props.defaultImages || []
  )

  const pushImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...images, ...Array.from(event.target.files)])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  return {
    images,
    pushImages,
    removeImage,
  }
}
