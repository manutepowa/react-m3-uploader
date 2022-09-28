export type DefaultFile = {
  id: string,
  url: string,
}

export interface IReactUploader {
  defaultImages?: DefaultFile[];
  description?: string;
}

export interface UploaderContext {
  pushImages: (event: React.ChangeEvent<HTMLInputElement>) => void;
  images: Array<DefaultFile | File>;
  removeImage: (index: number) => void;
}
