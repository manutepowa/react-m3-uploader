import useUploaderContext from "../../context"
import { Remove } from "../../icons/Remove"
import "./style.css"

export const Preview = () => {
  const { images, removeImage } = useUploaderContext()
  return (
    <>
      {images.length > 0 && (
        <div className="container">
          {images.map((image, index) => {
            const imageToRender: string =
              image instanceof File ? URL.createObjectURL(image) : image.url
            return (
              <div key={index} className="imageCard">
                <span className="remove" onClick={() => removeImage(index)}>
                  <Remove />
                </span>
                <img className="thumbnail" src={imageToRender} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
