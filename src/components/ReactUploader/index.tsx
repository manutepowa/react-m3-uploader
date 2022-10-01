import { UploaderProvider } from "../../context"
import { IReactUploader } from "../../types"
import { Input } from "../Input"
import { Preview } from "../Preview"

export const ReactUploader = ({
  description,
  images,
  setImages,
  setRemovedImages,
}: IReactUploader): JSX.Element => {
  return (
    <UploaderProvider {...{ images, setImages, setRemovedImages }}>
      {/* <div className="w-full space-y-8 p-8 bg-white"> Remove shadow and rounded */}
      <div className="w-full space-y-8 rounded-md shadow-md p-8 bg-white">
        {description && <p className="text-center text-md">{description}</p>}
        <Input />
        <Preview />
      </div>
    </UploaderProvider>
  )
}
