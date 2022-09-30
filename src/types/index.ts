import { Dispatch, SetStateAction } from "react"

export type DefaultFile = {
  id: string,
  url: string,
}
export type ImagesType = Array<DefaultFile | File>

export interface IReactUploader {
  defaultImages?: DefaultFile[];
  description?: string;
  images: ImagesType | undefined;
  setImages: Dispatch<SetStateAction<ImagesType>>;
}

export interface UploaderContext {
  pushImages: (event: React.ChangeEvent<HTMLInputElement>) => void;
  images: ImagesType;
  removeImage: (index: number) => void;
}
