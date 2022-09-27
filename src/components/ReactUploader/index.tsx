import { IReactUploader } from '../../types'
import css from './style.module.css'


export const ReactUploader = ({name, fetcher}: IReactUploader): JSX.Element => {
  console.log(name, fetcher)
  
  return (
    <div className={css.container}>
      helloo {name}
    </div>
  )
}


