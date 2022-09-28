import { UploaderProvider } from '../../context'
import { IReactUploader } from '../../types'
import { Input } from '../Input'


export const ReactUploader = (props: IReactUploader): JSX.Element => {
  
  return (
    <UploaderProvider {...props}>
      <Input />
    </UploaderProvider>
  )
}


