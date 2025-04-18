import styled from "styled-components";
export {
  UniformSection,
  Details,
  Gradient,
  NavBar,
  Li,
  DetailsLeft,
  DetailsRight,
  Option,
  Line,
  Shadow,
};

const Shadow = styled.div<{ active: string }>`
  position: absolute;
  bottom: 1vh;
  right: 50%;
  height: 3.3vh;
  width: ${({ active }) =>
    active === "caixas"
      ? "2.89vw"
      : active === "uniformes"
      ? "4.6vw"
      : "7.4vh"};
  background: rgba(255, 26, 108, 0.8);
  filter: blur(1.2vw);

  border-radius: 100%;

  transform: ${({ active }) =>
    active === "caixas"
      ? "translateX(-5.45vw)"
      : active === "uniformes"
      ? "translate(45%)"
      : "translateX(8.49vw)"};
  transition: all 0.6s ease;
`;

const Line = styled.div<{ active: string }>`
  position: absolute;
  bottom: -0.3vh;
  right: 50%;
  height: 0.74vh;
  width: ${({ active }) =>
    active === "caixas"
      ? "2.89vw"
      : active === "uniformes"
      ? "4.6vw"
      : "7.4vh"};
  background: rgba(255, 26, 108, 1);
  border-radius: 0.83vw;
  transform: ${({ active }) =>
    active === "caixas"
      ? "translateX(-5.45vw)"
      : active === "uniformes"
      ? "translate(45%)"
      : "translateX(8.49vw)"};
  transition: all 0.6s ease;
`;
const UniformSection = styled.section`
  width: 100vw;
  height: 146.48vh;
  background-color: rgba(7, 13, 29, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 10.74vh;
`;

const NavBar = styled.div`
  width: 31.25vw;
  height: 7.41vh;
  background-color: rgba(21, 34, 63, 1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Li = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 16.41vw;
  height: 2.22vh;
`;

const Option = styled.h1<{ active: boolean }>`
  font-weight: ${(props) => (props.active ? 700 : 400)};
  font-size: 0.83vw;
  line-height: 112.99999999999999%;
  letter-spacing: 0%;
  transition: all 0.2s ease-in;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;

const DetailsLeft = styled.div`
  width: 0.63vw;
  height: 5.19vh;
  background-color: rgba(86, 142, 255, 1);
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translate(0, -50%);
  clip-path: polygon(0 0, 100% 13.8%, 100% 86.2%, 0 100%);
`;
const DetailsRight = styled.div`
  width: 0.63vw;
  height: 5.19vh;
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(0, -50%);

  background-color: rgba(86, 142, 255, 1);
  clip-path: polygon(100% 0, 0 13.8%, 0 86.2%, 100% 100%);
`;
const Details = styled.div``;

const Gradient = styled.div``;
