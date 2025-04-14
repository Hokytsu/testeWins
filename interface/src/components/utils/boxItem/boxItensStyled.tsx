import styled from "styled-components";

export {
  BoxFeatureds,
  BoxWeapons,
  BoxUniforms,
  ImgFeatureds,

  ImgUniforms,
  PointedName,
  PointedValue,
  Name,
  Colection,
  InfosWeapons,
  PointedContainer,
  Hex,
  ImgContainer,
};




//----------------------------------Weapons
const BoxWeapons = styled.div`
  min-height: 17.78vh;
  min-width: 9.17vw;
  background-color: rgba(15, 27, 53, 1);
  border: 0.05vw solid rgba(86, 142, 255, 0.55);
  position: relative;

  &:hover {
    border: 0.05vw solid rgba(86, 142, 255, 1);
    box-shadow: inset 0.15vw 0.21vh 2vw rgba(86, 142, 255, 0.12),
      inset -0.15vw -0.21vh 2vw rgba(86, 142, 255, 0.12),
      inset -0.15vw 0.21vh 2vw rgba(86, 142, 255, 0.12),
      inset 0.15vw -0.21vh 2vw rgba(86, 142, 255, 0.12);

    transition: box-shadow 0.3s ease-in, border 0.2s ease-in;
  }
`;

const ImgContainer = styled.div<{ $imgurl: string }>`
  position: absolute;
  overflow: hidden;
  top: 2.41vh;
  width: 7.92vw;
  height: 7.15vh;
  right: 50%;
  background-image: url(${props => props.$imgurl});
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;// 

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

//----------------------------------Uniforms
const BoxUniforms = styled.div``;
const ImgUniforms = styled.img``;

//----------------------------------Featureds
const BoxFeatureds = styled.div``;
const ImgFeatureds = styled.img``;

//----------------------------------Utils

const Hex = styled.img`
  height: 12.3vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
`;
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
  text-align: center;
  line-height: 175%;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
`;
const Name = styled.h1`
  font-weight: 400;
  font-size: 0.83vw;
  max-width: 90%;
  white-space: nowrap;   
  overflow: hidden;       
  text-overflow: ellipsis;
  line-height: 95%;
  letter-spacing: 0%;
  color: rgba(255, 255, 255, 1);
  text-align: center;
`;
const Colection = styled.h1`
  color: rgba(64, 69, 79, 1);
  font-weight: 400;
  font-size: 1.04vw;
  line-height: 95%;
  letter-spacing: 0%;
  text-align: center;
`;
