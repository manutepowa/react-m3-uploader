import { useRef } from "react"
import useUploaderContext from "../../context"

export const Input = (): JSX.Element => {
  const { pushImages } = useUploaderContext()
  const filesRefs = useRef<HTMLInputElement>(null)
  return (
    <>
      <button onClick={() => filesRefs.current?.click()}>Upload</button>
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
    </>
  )
}
