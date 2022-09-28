import { UploaderProvider } from "../../context"
import { IReactUploader } from "../../types"
import { Input } from "../Input"
import { Preview } from "../Preview"

export const ReactUploader = ({
  defaultImages = [],
  description,
}: IReactUploader): JSX.Element => {
  return (
    <UploaderProvider {...{ defaultImages }}>
      <div className="w-full space-y-4 rounded-md shadow-md p-8 bg-gray-50">
        {description && <p className="text-center">{description}</p>}
        <Input />
        <Preview />
      </div>
    </UploaderProvider>
  )
}
