export interface IReactUploader {
  name?: string;
  fetcher?: (url: string) => void;
}
