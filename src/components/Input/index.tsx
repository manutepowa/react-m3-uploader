import { useRef } from "react"
import useUploaderContext from "../../context"

const buttonStyle =
  "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-md px-4 py-2 text-white mx-auto block"

export const Input = (): JSX.Element => {
  const { pushImages, images, styles } = useUploaderContext()
  const filesRefs = useRef<HTMLInputElement>(null)
  return (
    <div>
      <button
        className={styles && styles.button ? styles.button : buttonStyle}
        onClick={() => filesRefs.current?.click()}
        type="button"
      >
        Select Images
      </button>
      <input
        accept="image/*"
        onChange={(e) => pushImages(e, images)}
        multiple
        ref={filesRefs}
        type="file"
        style={{
          display: "none",
        }}
      />
    </div>
  )
}
