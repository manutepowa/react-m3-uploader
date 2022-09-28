import { UploaderProvider } from "../../context"
import { IReactUploader } from "../../types"
import { Input } from "../Input"
import { Preview } from "../Preview"

export const ReactUploader = (props: IReactUploader): JSX.Element => {
  return (
    <UploaderProvider {...props}>
      <div>
        <Input />
        <Preview />
      </div>
    </UploaderProvider>
  )
}
