export interface IReactUploader {
  name?: string;
  fetcher?: (url: string) => void;
}

export interface UploaderContext {
  pushImages: (event: React.ChangeEvent<HTMLInputElement>) => void;
  images: File[];
  removeImage: (index: number) => void;
}
