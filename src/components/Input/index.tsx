import { useRef } from "react"
import useUploaderContext from "../../context"

export const Input = (): JSX.Element => {
  const { pushImages } = useUploaderContext()
  const filesRefs = useRef<HTMLInputElement>(null)
  return (
    <div>
      <button
        className="bg-blue-600 rounded-md px-4 py-2 text-white mx-auto block"
        onClick={() => filesRefs.current?.click()}
      >
        Upload Images
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
