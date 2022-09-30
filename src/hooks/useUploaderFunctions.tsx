import React, { useEffect } from "react"
import { IReactUploader } from "../types"

export const useUploaderFunctions = (props: Partial<IReactUploader>) => {
  // const [images, setImages] = React.useState<Array<DefaultFile | File>>(
  //   props.defaultImages || []
  // )
  useEffect(() => {
    props.setImages?.([...props.images, ...props.defaultImages])
  }, [])

  const pushImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      props.setImages?.([...props.images, ...Array.from(event.target.files)])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...props.images]
    newImages.splice(index, 1)
    props.setImages?.(newImages)
  }

  return {
    images: props.images,
    pushImages,
    removeImage,
  }
}
