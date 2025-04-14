import { useState } from "react";
import * as S from "./chamferButtonStyled";
import { UtilsInterface } from "../../../../interface/Utils.Interface";

// Este botão não funciona para locais a onde precisa aparecer o background personalizado

// Botão de cantos cortados, feito para ser reutilziado em todos cantos do site, quando nescessarios
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
    action,
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
      {/*Borda externa*/}
      <S.ChamferButtonBorder
        $bordercolor={
          isHoverButton ? hovercolor : isClickButton ? clickcolor : bordercolor
        }
      />
      {/*Background - Cor do fundo que vai ser posto o botão, além que o tamanho dele indica a expessura da borda*/}
      <S.ChamferButtonBg
        $bgheight={bgheight}
        $bgwidth={bgwidth}
        $backgroundcolor={backgroundcolor}
      />
      {/*PArte interna do botão*/}
      <S.ChamferButtonContent
        $contentheight={contentheight}
        $contentwidth={contentwidth}
        $contentcolor={
          isHoverButton ? hovercolor : isClickButton ? clickcolor : contentcolor
        }
      >
        {children} {/*Conteudo dentro do botao*/}
      </S.ChamferButtonContent>
    </S.ChamferButton>
  );
}

export default ChamferButton;
