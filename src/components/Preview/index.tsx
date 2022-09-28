import useUploaderContext from "../../context"
import css from "./style.module.css"

export const Preview = () => {
  const { images, removeImage } = useUploaderContext()
  return (
    <>
      {images.length > 0 && (
        <div className={css.container}>
          {images.map((image, index) => {
            return (
              <div key={index}>
                <span onClick={() => removeImage(index)}>x</span>
                <img
                  className={css.thumbnail}
                  src={URL.createObjectURL(image)}
                />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
