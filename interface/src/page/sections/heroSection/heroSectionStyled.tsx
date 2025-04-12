import styled from "styled-components";
export { HeroSection, Background, Gradient, Details };
const HeroSection = styled.section`
  width: 100vw;
  height: 95.37vh;
  position: relative;

  /* border-image: linear-gradient(
    to bottom,
    rgba(137, 14, 58, 0) 46.5%,
    rgba(239, 24, 101, 0.4) 1 100%
  ); */
`;
const Gradient = styled.div`
  width: 100vw;
  height: 95.37vh;
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
const Details = styled.div`
  width: 100vw;
  height: 4.81vh;
  background-color: aliceblue;
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
