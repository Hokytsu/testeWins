import styled, { css } from "styled-components";
export {
  PadsSection,
  PadsContainer,
  BasePads,
  Arrow,
  Button,
  Infos,
  Description,
  Title,
  Details,
  Join,
  ContentButton,
};
const ContentButton = styled.div``;
const PadsSection = styled.section`
  width: 100vw;
  height: 90.65vh;
  background: rgba(7, 13, 29, 1);
`;
const PadsContainer = styled.div`
  width: 100vw;
  position: relative;
  height: 62.41vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Join = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-size: 0.94vw;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`;
const BasePads = styled.img`
position: absolute;
left: 50%;
transform:  translateX(-50%);
top:66.17vh;
width: 24.17vw;
height: 9.26vh;
`;

const Arrow = styled.img<{ side: "left" | "right" }>`
 
width: 0.31vw;
height: 1.02vh;


  ${({ side }) => {
    switch (side) {
      case "left":
        return css``;
      case "right":
        return css`
          transform: rotate(180deg);
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;
const Button = styled.div<{ side: "left" | "right" }>`
position: absolute;
z-index: 6;
top: 28.89vh;
  background: rgba(86, 142, 255, 1);
  &:hover {
    background: #4d73be;
  }
  width: 2.08vw;
  height: 3.7vh;
display: flex;
justify-content: center;
align-items: center;
  ${({ side }) => {
    switch (side) {
      case "left":
        return css`
        left: 17.50vw;
          clip-path: polygon(
            0 22.5%,
            10% 0%,
            100% 0%,
            100% 90%,
            90% 100%,
            0% 100%,
            0% 22.5%
          );
        `;
      case "right":
        return css`
        right: 17.50vw;
          clip-path: polygon(
            100% 22.5%,
            90% 0%,
            0% 0%,
            0% 90%,
            10% 100%,
            100% 100%,
            100% 22.5%
          );
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;

const Infos = styled.div`
  position: absolute;
  width: 22.5vw;
  height: 17.04vh;
  bottom: 0;
  left: 13.33vw;
`;

const Description = styled.h3`
  color: rgba(255, 255, 255, 1); /*FAZER ...*/
  font-weight: 400;
  font-size: 0.83vw;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 2.96vh;
`;
const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-size: 2.08vw;
  line-height: 95%;
  letter-spacing: 0%;
  vertical-align: middle;
  margin-bottom: 1.48vh;
`;

const Details = styled.div<{ blur: string }>``;
