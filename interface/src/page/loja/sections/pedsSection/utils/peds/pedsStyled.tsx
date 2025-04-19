import styled, { css } from "styled-components";
export { Container, Value, Name, Pads, Infos };

const Container = styled.div<{ $position: string; $isVisible: boolean }>`
  flex-direction: column;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 5.19vh;
  height: 61.39vh;
  cursor: pointer;
  position: absolute;
  top: 10vh;
  left: 0;
  transform-origin: center center;
  
  



  ${({ $position }) => {
    switch ($position) {
      case "left":
        return css`
          left: -19vw;
          top: 20vh;
          transform: scale(0.9);
        `;
      case "center":
        return css`
          left: 0;
          transform: scale(1);
        `;
      case "far-right":
        return css`
          left: 25vw;
          display: none;
          transform: scale(0.1);
          opacity: 0;
        `;
      case "far-left":
        return css`
          left: -25vw;
          opacity: 0;
          display: none;
          transform: scale(0.1);
        `;
      case "right":
        return css`
          left: 19vw;
          top: 20vh;
          transform: scale(0.9);
          
        `;
      default:
        return css`
          left: 0; 
        `;
    }
  }};
  transition: 
    opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1),
    left 700ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 1s cubic-bezier(0.4, 0, 0.2, 1);

`;

const Pads = styled.div<{ $imgurl: string; $isActive: boolean }>`
  position: relative;
  width: ${({ $isActive }) => ($isActive ? "20.31vw" : "16vw")};
  height: ${({ $isActive }) => ($isActive ? "52.04vh" : "42vh")};
  background-image: url(${(props) => props.$imgurl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: ${({ $isActive }) => ($isActive ? "none" : "blur(1.17vw)")};
  margin-top: ${({ $isActive }) => ($isActive ? "0" : "3vh")};
  transition: all 0.9s ease;
`;
const Value = styled.div`
  background: rgba(86, 142, 255, 1);
  width: 8.85vw;
  height: 2.96vh;
  clip-path: polygon(
    5.85% 0%,
    94.15% 0%,
    100% 50%,
    94.15% 100%,
    5.85% 100%,
    0% 50%,
    5.85% 0%
  );
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: 0.94vw;
  line-height: 175%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  opacity: 1;
  transition: all 0.1s ease;
`;

const Infos = styled.div`
  width: 10vw;
  height: 5.93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.h2`
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: 0.83vw;
  line-height: 95%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  opacity: 1;
  transition: all 0.1s ease;
`;
