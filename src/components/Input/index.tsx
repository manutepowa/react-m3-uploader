import { useRef } from "react"
import useUploaderContext from "../../context"

const buttonStyle =
  "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-md px-4 py-2 text-white"

export const Input = (): JSX.Element => {
  const { pushImages } = useUploaderContext()
  const filesRefs = useRef<HTMLInputElement>(null)
  return (
    <div>
      <button
        className={`${buttonStyle} mx-auto block`}
        onClick={() => filesRefs.current?.click()}
      >
        Select Images
      </button>
      <input
        accept="image/*"
        onChange={pushImages}
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
