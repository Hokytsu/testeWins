import styled from "styled-components";
import { Link } from "react-router-dom";

export {
  HeaderContainer,
  WinsMain,
  DividerLine,
  WinsPVP,
  LogoSection,
  LogoLink,
  Header
};

//Header
const HeaderContainer = styled.header`
  background: rgba(0, 9, 22, 1);
  height: 8.63vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

 
`;

const Header = styled.div`
  height: 4.44vh;
  width: 75.00vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5.16vw;
`;

//Logo styles
const LogoSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11.88vw;
  height: 3.7vh;
`;
const WinsMain = styled.img`
  width: 7.92vw;
  height: 2.41vh;
  cursor: pointer;
`;
const LogoLink = styled(Link)`
  // Não configurado
`;
const DividerLine = styled.div`
  width: 1.46vw;
  height: 0vh;
  border: 0.05vw solid rgba(255, 255, 255, 0.41);
  transform: rotate(90deg);
`;
const WinsPVP = styled.img`
  width: 1.77vw;
  height: 3.7vh;
  cursor: pointer;
`;
