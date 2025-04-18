import styled from "styled-components";
export {
  HeroSection,
  Background,
  Gradient,
  Details,
  ContainerContend,
  ContainerText,
  ContainerTitle,
  ContainerWeapons,
  Title,
  PointedTitle,
  SectionSubTitle,
  SectionTitle,
  StyleDetail,
};


// Section
const HeroSection = styled.section`
  width: 100vw;
  height: 95.37vh;
  position: relative;
`;
const ContainerWeapons = styled.div`
  height: auto;
  width: 47.5vw;
  overflow-x: hidden;
  display: flex;
  top: -1vh;
  position: relative;
`;
const ContainerContend = styled.div`
  height: auto;
  width: 47.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 27.22vh;
  left: 50%;
  gap: 5.5vh;
  transform: translate(-50%);
  z-index: 4;
`;

const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 21.67vw;
  height: 16.85vh;
  gap: 2.22vh;
`;
const ContainerTitle = styled.div`
  width: 43.54vw;
  height: 3.7vh;

  gap: 12.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .pointedShadow {
    position: absolute;
    top: 22.5vh;
    left: 19vw;
    height: 2.81vh;
    width: 9.5vw;
    background-color: transparent;
    box-shadow: 0 0 6.5vh 5vh rgba(86, 142, 255, 0.2);
  }
`;
const SectionTitle = styled.h1`
  font-weight: 700;
  font-size: 3.33vw;
  width: 42.4vw;
  letter-spacing: 0%;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  line-height: 0.95;
`;
const SectionSubTitle = styled.h2`
  font-weight: 300;
  font-size: 0.83vw;
  line-height: 112.99999999999999%;
  letter-spacing: 0%;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;
// Details
const Gradient = styled.div`
  width: 100vw;
  height: 95.4vh;
  position: absolute;
  top: 0%;
  left: 0%;
  background: linear-gradient(
    43.26deg,
    rgba(7, 13, 29, 0.83) 30.65%,
    rgba(15, 27, 53, 0.629611) 50.68%,
    rgba(15, 27, 53, 0) 71.27%
  );
  border-bottom: 0.1vh solid rgba(239, 24, 101, 0.4);
  z-index: 1;
`;

const StyleDetail = styled.div``; //TODO:Parte inferior HERO PAGE
const Details = styled.div`//TODO:Parte inferior HERO PAGE
  width: 100vw;
  height: 4.81vh;
 
  position: absolute;
  bottom: 0%;
  left: 0%;
  z-index: 2;
`;
const Background = styled.img`
  width: 99.9vw;
  position: absolute;
  top: -0.1vh;
  left: 0%;
  height: 95.37vh;
  object-fit: cover;
  z-index: 0;
  border-width: 0.05vw;
  border-style: solid;
  border-image: linear-gradient(
      to bottom,
      rgba(137, 14, 58, 0),
      rgba(239, 24, 101, 0.4)
    )
    1 100%;
`;
// Utils
const PointedTitle = styled.div`
  height: 14.81vh;
  width: 17.5vw;
  position: fixed;
  background-color: rgba(86, 142, 255, 1);
  clip-path: polygon(
    22.62% 35%,
    77.38% 35%,
    82.14% 47.5%,
    77.38% 60%,
    22.62% 60%,
    17.86% 47.5%
  );
`;


const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  text-align: center;
  position: absolute;
  top: 47.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 0.94vw;

  letter-spacing: 0%;
`;






