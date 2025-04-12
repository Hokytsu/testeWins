import styled from "styled-components";
import { background } from "../../../../assets";
export {
  UserSide,
  ContentButton,
  Exit,
  IconExit,
  IconGlobo,
  PlaceAvatar,
  UserPlace,
  AvatarUser,
};

const UserSide = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid #eeeeee; */
  height: 4.44vh;
  width: 17.5vw;

  gap: 0.83vw;
`;

const ContentButton = styled.div`
  width: 3.75vw;
  height: 2.22vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.42vw;
`;

const Exit = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  font-size: 0.73vw;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
`;

const IconExit = styled.img`
  width: 1.25vw;
  height: 2.22vh;
`;

const IconGlobo = styled.img`
  width: 1.04vw;
  height: 1.85vh;
  cursor: pointer;
`;
const UserPlace = styled.div`
  width: 5vw;
  height: 3.7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.67vw;
`;

const PlaceAvatar = styled.div`
  width: 2.08vw;
  height: 3.7vh;
  border-radius: 100%;
  background-color: rgba(86, 142, 255, 1);
  border: 0.1vw solid rgba(86, 142, 255, 1);
`;

const AvatarUser = styled.img`
 `;
