import {Image} from './image';

export interface Portfolio {
  title: string;
  description: string;
  text: string;
  url: string;
  images: Image[];
  order: number;
}
