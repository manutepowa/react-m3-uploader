export interface IReactUploader {
  name?: string;
  fetcher?: (url: string) => void;
}

export type UploaderContext = IReactUploader
