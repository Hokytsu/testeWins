export interface ButtonsInterface {
  contentwidth?: number;
  bgwidth?: number;
  contentheight?: number;
  bgheight?: number;
  bordercolor?: string;
  backgroundcolor?: string;
  children: React.ReactNode;
  width?: number;
  height?: number;
  contentcolor?: string;
  hovercolor?: string;
  clickcolor?: string;
  action?: () => void; // Tem que tipar isso direito de acordo com sua action, está somente exemplificando.
}

export interface TransientButtonsInterface { // Evita que seja jogado no Doom
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
}
