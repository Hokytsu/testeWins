import { useState } from "react";
import * as S from "./chamferButtonStyled";
import { UtilsInterface } from "../../../../interface/Utils.Interface";

import Frame from "./Frame 5416.svg"
// Este botão não funciona para locais a onde precisa aparecer o background personalizado
function ChamferButton({ ...props }: UtilsInterface) {
  const [isHoverButton, setIsHoverButton] = useState<boolean>(false);
  const [isClickButton, setIsClickButton] = useState<boolean>(false);
  const {
    children,
    width,
    height,
    contentwidth,
    bgwidth,
    contentheight,
    bgheight,
    bordercolor,
    backgroundcolor,
    contentcolor,
    hovercolor,
    clickcolor,
    action
  } = props;

  function handleClick() {
      //Lógica click
    if (action) {
      action();
    }
  
  }
  return (
    <S.ChamferButton
      $width={width}
      $height={height}
      onClick={() => handleClick()}
      onMouseEnter={() => setIsHoverButton(true)}
      onMouseLeave={() => setIsHoverButton(false)}
    >
      <S.ChamferButtonBorder $bordercolor={isHoverButton ? hovercolor : isClickButton ? clickcolor : bordercolor} />
      <S.ChamferButtonBg
        $bgheight={bgheight}
        $bgwidth={bgwidth}
        $backgroundcolor={backgroundcolor}
      />
      <S.ChamferButtonContent
        $contentheight={contentheight}
        $contentwidth={contentwidth}
        $contentcolor={isHoverButton ? hovercolor : isClickButton ? clickcolor : contentcolor}
      >
        {children}
        </S.ChamferButtonContent> 
      
    </S.ChamferButton>
  );
}

export default ChamferButton;
