import { DefaultFile, ImagesType, IReactUploader } from "../types"

export const useUploaderFunctions = ({
  setImages,
  setRemovedImages,
}: Partial<IReactUploader>) => {
  const pushImages = (
    event: React.ChangeEvent<HTMLInputElement>,
    images: ImagesType
  ) => {
    if (event.target.files) {
      setImages?.([...images, ...Array.from(event.target.files)])
    }
  }

  const setRemovedImagesFunction = (image: DefaultFile) => {
    setRemovedImages?.((prev) => [...prev, image])
  }

  const removeImage = (index: number, images: ImagesType) => {
    const newImages = [...images]
    const removedImage = newImages.splice(index, 1)
    if (removedImage[0] instanceof File === false) {
      setRemovedImagesFunction(removedImage[0] as DefaultFile) //eslint-disable-line
    }
    setImages?.([...newImages])
  }

  return {
    pushImages,
    removeImage,
  }
}
