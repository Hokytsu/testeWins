export interface WeaponInterface {
  data: WeaponType[];
}
type WeaponType = {
  name: string;
  price: number;
  images: string[];
};
export interface PedsInterface {
  data: PedsType[];
}
type PedsType = {
  description: string;
  images: string[];
  name: string;
  price: number;
};
export interface UniformsInterface {
  data: uniformType[];
}
type uniformType = {
  images: string[];
  name: string;
  price: number;
};
