import useUploaderContext from "../../context"
import { Remove } from "../../icons/Remove"
import css from "./style.module.css"

export const Preview = () => {
  const { images, removeImage } = useUploaderContext()
  return (
    <>
      {images.length > 0 && (
        <div className={css.container}>
          {images.map((image, index) => {
            const imageToRender: string =
              image instanceof File ? URL.createObjectURL(image) : image.url
            return (
              <div key={index} className={css.imageCard}>
                <span className={css.remove} onClick={() => removeImage(index)}>
                  <Remove />
                </span>
                <img className={css.thumbnail} src={imageToRender} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
