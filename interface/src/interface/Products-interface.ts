export interface WeaponsInterface {
  data: WeaponsType[];
}
export type WeaponsType = {// TODO: Caso cresça, componentizar.
  name: string;
  price: number;
  images: string[];
};
export interface PedsInterface {
  data: PedsType[];
}
export type PedsType = {// TODO: Caso cresça, componentizar.
  description: string;
  images: string[];
  name: string;
  price: number;
};
export interface UniformsInterface {
  data: UniformsType[];
}
export type UniformsType = {// TODO: Caso cresça, componentizar.
  images: string[];
  name: string;
  price: number;
};
