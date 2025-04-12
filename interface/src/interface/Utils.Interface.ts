interface utilsInterface {}
interface buttonsInterface {
  contentWidth?: number;
  bgWidth?: number;
  contentHeight?: number;
  bgHeight?: number;
  borderColor?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  width?: number;
  height?: number;
  contentColor?: string;
  hoverColor?: string;
  clickColor?: string;
  action?: (...args: any) => void;
 

}
