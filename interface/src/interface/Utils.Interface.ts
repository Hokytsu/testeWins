export interface UtilsInterface {// TODO: Separar as interfaces de cada componente.
  contentwidth?: number;
  bgwidth?: number;
  contentheight?: number;
  bgheight?: number;
  bordercolor?: string;
  backgroundcolor?: string;
  children?: React.ReactNode;
  width?: number;
  height?: number;
  contentcolor?: string;
  hovercolor?: string;
  clickcolor?: string;
  action?: () => void; // Tem que tipar isso direito de acordo com sua action, está somente exemplificando.
  trapezio?: boolean;
  stroketop?: boolean;
  type?: string;
  img?: string;
  nameItem?:string;
  valueItem?:number;
  place?:string;
  colection?:string;
}

export interface TransientUtilsInterface { // Evita que seja jogado no Doom
  $contentwidth?: number;
  $bgwidth?: number;
  $contentheight?: number;
  $bgheight?: number;
  $bordercolor?: string;
  $backgroundcolor?: string;
  $width?: number;
  $height?: number;
  $contentcolor?: string;
  $hovercolor?: string;
  $clickcolor?: string;
  $trapezio?: boolean;
  $stroketop?: boolean;
  $type?: string;
  $img?: string;
  $nameItem?:string;
  $valueItem?:number;
}

