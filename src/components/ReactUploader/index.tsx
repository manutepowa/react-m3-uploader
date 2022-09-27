import css from './style.module.css'

export interface IReactUploader {
  name: string
  fetcher: (url: string, options: any) => Promise<any>
}

const ReactUploader = ({name, fetcher}: IReactUploader): JSX.Element => {
  console.log(name)
  
  return (
    <div className={css.container}>
      hello worlddsasdf
    </div>
  )
}


export default ReactUploader
