import { UploaderProvider } from "../../context"
import { IReactUploader } from "../../types"
import { Input } from "../Input"
import { Preview } from "../Preview"

export const ReactUploader = ({
  defaultImages = [],
}: IReactUploader): JSX.Element => {
  return (
    <UploaderProvider {...{ defaultImages }}>
      <div>
        <Input />
        <Preview />
      </div>
    </UploaderProvider>
  )
}
