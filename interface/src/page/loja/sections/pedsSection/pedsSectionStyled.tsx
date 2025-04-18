import styled from "styled-components";
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
const BasePads = styled.img``;

const Arrow = styled.img``;
const Button = styled.div``;
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
