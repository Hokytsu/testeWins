export interface WeaponInterface {
    name: string;
    price: number;
    images: string[];
  }

  export interface PedsInterface { // Criado separado para caso haja modificações futuras na response da API
    description: string;
    images: string[];
    name: string;
    price: number;
  }

  export interface UniformsInterface{ // Criado separado para caso haja modificações futuras na response da API
    description: string;
    images: string[];
    name: string;
    price: number;
  }