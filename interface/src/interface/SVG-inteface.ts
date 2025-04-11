 export default interface SVGInterface extends React.SVGProps<SVGSVGElement> {
    color?: string;
    width?: string | number;
    height?: string | number;
    hoverColor?: string;
    action?: () => void
    fill?: string;//TODO: FAZER FILL NO YOUTUBE, E CRIAR OUTROS Componets com os svgs defaults
  }

