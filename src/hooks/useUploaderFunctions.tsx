import React from "react"

export const useUploaderFunctions = () => {
  const [images, setImages] = React.useState<File[]>([])

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
