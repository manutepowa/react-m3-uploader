import useUploaderContext from "../../context"
import { Remove } from "../../icons/Remove"

export const Preview = () => {
  const { images, removeImage } = useUploaderContext()
  return (
    <>
      {images.length > 0 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((image, index) => {
            const imageToRender: string =
              image instanceof File ? URL.createObjectURL(image) : image.url
            return (
              <div
                key={index}
                className="w-[100px] h-[100px] relative rounded-md shadow-md"
              >
                <span
                  className="absolute right-2"
                  onClick={() => removeImage(index)}
                >
                  <Remove />
                </span>
                <img className="w-[150px] rounded-md" src={imageToRender} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
