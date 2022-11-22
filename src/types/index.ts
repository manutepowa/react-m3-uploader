import { Dispatch, SetStateAction } from "react"

export type DefaultFile = {
  id: string | number,
  url: string,
}
export type ImagesType = Array<DefaultFile | File>
export type StylesProps = {
  [key: string]: string,
} | null

export interface IReactUploader {
  description?: string;
  images: ImagesType;
  setImages: Dispatch<SetStateAction<ImagesType>>;
  setRemovedImages?: Dispatch<SetStateAction<DefaultFile[]>>;
  styles?: StylesProps;
}

export interface UploaderContext {
  pushImages: (
    event: React.ChangeEvent<HTMLInputElement>,
    images: ImagesType
  ) => void;
  removeImage: (index: number, images: ImagesType) => void;
  images: ImagesType;
  styles: StylesProps;
}
