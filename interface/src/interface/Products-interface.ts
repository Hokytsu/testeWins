export interface WeaponsInterface {
  data: WeaponsType[];
}
export type WeaponsType = {
  name: string;
  price: number;
  images: string[];
};
export interface PedsInterface {
  data: PedsType[];
}
export type PedsType = {
  description: string;
  images: string[];
  name: string;
  price: number;
};
export interface UniformsInterface {
  data: UniformsType[];
}
export type UniformsType = {
  images: string[];
  name: string;
  price: number;
};
