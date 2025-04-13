import styled from "styled-components";

export {
  BoxFeatureds,
  BoxWeapons,
  BoxUniforms,
  ImgFeatureds,
  ImgWeapons,
  ImgUniforms,
  PointedName,
  PointedValue,
  Name,
  Colection,
  InfosWeapons,
  PointedContainer,
};

const BoxWeapons = styled.div`
  height: 17.78vh;
  width: 9.17vw;
  background-color: rgba(15, 27, 53, 1);
  border: 0.05vw solid rgba(86, 142, 255, 0.55);
  position: relative;
`;
const ImgWeapons = styled.img`
  height: 8.15vh;
  width: 7.92vw;
  position: absolute;
  top: 2.41vh;
  right: 50%;
  transform: translateX(50%);
  
`;

const InfosWeapons = styled.div`
  width: 7.92vw;
  height: 4.81vh;
  gap: 0.74vh;
  position: absolute;
  bottom: 1.48vh;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

//----------------------------------
const BoxUniforms = styled.div``;
const ImgUniforms = styled.img``;

//----------------------------------
const BoxFeatureds = styled.div``;
const ImgFeatureds = styled.img``;

//----------------------------------
const PointedContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  clip-path: polygon(
    5.21% 0,
    94.8% 0,
    100% 50%,
    94.8% 100%,
    5.21% 100%,
    0% 50%
  );
  background-color: rgba(47, 58, 81, 1);
  height: 2.59vh;
  width: 7.71vw;
`;
const PointedName = styled.h1`
  font-weight: 400;
  font-size: 0.83vw;
  line-height: 95%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
`;
const PointedValue = styled.h1`
  font-weight: 400;
  font-size: 0.83vw;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
`;
const Name = styled.h1`
  font-weight: 400;
  font-size: 0.83vw;
  line-height: 95%;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
`;
const Colection = styled.h1`
  color: rgba(64, 69, 79, 1);
  font-weight: 400;
  font-size: 1.04vw;
  line-height: 95%;
  letter-spacing: 0%;
  text-align: center;
`;
