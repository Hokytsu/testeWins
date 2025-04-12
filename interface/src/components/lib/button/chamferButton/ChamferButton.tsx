import { useState } from "react";
import * as S from "./chamferButtonStyled";
// Este botão não funciona para locais a onde precisa aparecer o background personalizado
function ChamferButton({ ...props }: buttonsInterface) {
  const [isHoverButton, setIsHoverButton] = useState<boolean>(false);
  const [isClickButton, setIsClickButton] = useState<boolean>(false);
  const {
    children,
    width,
    height,
    contentWidth,
    bgWidth,
    contentHeight,
    bgHeight,
    borderColor,
    backgroundColor,
    contentColor,
    hoverColor,
    clickColor,
  } = props;

  function handleClick() {
   //Lógica click
  }
  return (
    <S.ChamferButton
      width={width}
      height={height}
      
      onClick={() => handleClick()}
      onMouseEnter={() => setIsHoverButton(true)}
      onMouseLeave={() => setIsHoverButton(false)}
    >
      <S.ChamferButtonBorder borderColor={isHoverButton ? hoverColor : isClickButton ? clickColor : borderColor} />
      <S.ChamferButtonBg
        bgHeight={bgHeight}
        bgWidth={bgWidth}
        backgroundColor={backgroundColor}
      />
      <S.ChamferButtonContent
        contentHeight={contentHeight}
        contentWidth={contentWidth}
        contentColor={isHoverButton ? hoverColor : isClickButton ? clickColor : contentColor}
      >
        {children}
      </S.ChamferButtonContent>
    </S.ChamferButton>
  );
}

export default ChamferButton;
