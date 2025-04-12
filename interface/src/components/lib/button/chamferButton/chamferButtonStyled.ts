import styled from "styled-components";
export {
  ChamferButton,
  ChamferButtonBorder,
  ChamferButtonBg,
  ChamferButtonContent,
};

const ChamferButton = styled.div<Omit<buttonsInterface, "children">>`
  width: ${({ width }) => (width ? width + "vw" : "auto")};
  height: 4.44vh;
  position: relative;
  background-color: transparent;
`;

const ChamferButtonBorder = styled.div<Omit<buttonsInterface, "children">>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ borderColor }) => borderColor || "rgb(0, 0, 0)"};
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

const ChamferButtonBg = styled.div<Omit<buttonsInterface, "children">>`
  width: ${({ bgWidth }) => (bgWidth ? bgWidth + "vw" : "auto")};
  height: ${({ bgHeight }) => (bgHeight ? bgHeight + "vh" : "auto")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgb(0, 0, 0)"};
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

const ChamferButtonContent = styled.div<Omit<buttonsInterface, "children">>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: ${({ contentWidth }) => (contentWidth ? contentWidth + "vw" : "auto")};
  height: ${({ contentHeight }) =>
    contentHeight ? contentHeight + "vh" : "auto"};
  display: flex;
  justify-content: center;
  background-color: ${({ contentColor }) => contentColor || "rgb(0, 0, 0)"};
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
