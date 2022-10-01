import { Dispatch, SetStateAction } from "react"

export type DefaultFile = {
  id: string,
  url: string,
}
export type ImagesType = Array<DefaultFile | File>

export interface IReactUploader {
  description?: string;
  images: ImagesType;
  setImages: Dispatch<SetStateAction<ImagesType>>;
  setRemovedImages?: Dispatch<SetStateAction<DefaultFile[]>>;
}

export interface UploaderContext {
  pushImages: (
    event: React.ChangeEvent<HTMLInputElement>,
    images: ImagesType
  ) => void;
  removeImage: (index: number, images: ImagesType) => void;
  images: ImagesType;
}
