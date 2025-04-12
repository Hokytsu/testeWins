import styled from "styled-components";
import { TransientButtonsInterface } from "../../../../interface/Utils.Interface";
export {
  ChamferButton,
  ChamferButtonBorder,
  ChamferButtonBg,
  ChamferButtonContent,
};

/*Explicação: ChamferButton é o holder de tudo, o restante está centrado nele, o 
  ChamferButtonBg tem que levar a cor do fundo assim fazendo ter esse efeito de fundo
  transparente
  
  Tinha a opção de usar SVG direto ou usar SVG convertido para React-Components, mas fiz pensando
  em uma solução mais simples e reutilizavel.

   A config do clip-path: polygon{} é uma extração do svg do figma.
  */

const ChamferButton = styled.div<TransientButtonsInterface>`
  width: ${({ $width }) => ($width ? $width + "vw" : "auto")};
  height: ${({ $height }) => ($height ? $height + "vh" : "auto")};
  position: relative;
  background-color: transparent;
  cursor: pointer;
  background-color: aliceblue;
`;

const ChamferButtonBorder = styled.div<TransientButtonsInterface>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ $bordercolor }) => $bordercolor || "rgb(0, 0, 0)"};
  z-index: 1;
  clip-path: polygon(
    3.89% 18.53%,
    3.9% 18.51%,
    3.9% 18.49%,
    7.19% 1.12%,
    99.75% 1.12%,
    99.75% 67.59%,
    96.59% 83.24%,
    96.58% 83.26%,
    93.3% 98.89%,
    0.24% 98.89%,
    0.24% 35.96%,
    3.89% 18.53%
  );
`;

const ChamferButtonBg = styled.div<TransientButtonsInterface>`
  width: ${({ $bgwidth }) => ($bgwidth ? $bgwidth + "vw" : "auto")};
  height: ${({ $bgheight }) => ($bgheight ? $bgheight + "vh" : "auto")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ $backgroundcolor }) =>
    $backgroundcolor || "rgb(0, 0, 0)"};
  z-index: 2;
  clip-path: polygon(
    3.89% 18.53%,
    3.9% 18.51%,
    3.9% 18.49%,
    7.19% 1.12%,
    99.75% 1.12%,
    99.75% 67.59%,
    96.59% 83.24%,
    96.58% 83.26%,
    93.3% 98.89%,
    0.24% 98.89%,
    0.24% 35.96%,
    3.89% 18.53%
  );
`;

const ChamferButtonContent = styled.div<TransientButtonsInterface>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: ${({ $contentwidth }) => ($contentwidth ? $contentwidth + "vw" : "auto")};
  height: ${({ $contentheight }) =>
    $contentheight ? $contentheight + "vh" : "auto"};
  display: flex;
  justify-content: center;
  background-color: ${({ $contentcolor }) => $contentcolor || "rgb(0, 0, 0)"};
  align-items: center;
  clip-path: polygon(
    3.89% 18.53%,
    3.9% 18.51%,
    3.9% 18.49%,
    7.19% 1.12%,
    99.75% 1.12%,
    99.75% 67.59%,
    96.59% 83.24%,
    96.58% 83.26%,
    93.3% 98.89%,
    0.24% 98.89%,
    0.24% 35.96%,
    3.89% 18.53%
  );
`;
