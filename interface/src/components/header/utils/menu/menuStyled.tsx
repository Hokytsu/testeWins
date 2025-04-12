import { Link } from "react-router-dom";
import styled from "styled-components";
export {
  NavContainer,
  MenuUl,
  MenuLi,
  MenuLink,
  IconLink,
  MenuNoLink,
  IconNoLink,
  Badge,
  ArrowState,
  BadgeNumber,
};

// Nav
const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35.31vw;
  height: 2.22vh;
`;

// ul
const MenuUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30.31vw;
  height: 2.22vh;
  gap: 1.04vw;
`;

//li
const MenuLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 2.22vh;
  position: relative;
  
`;

// Icons
const IconNoLink = styled.img`
  height: 2.18vh;
  width: 1.22vw;
  cursor: pointer;
`;
const MenuNoLink = styled.h1`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-size: 0.83vw;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  cursor: pointer;
  
`;
const ArrowState = styled.img`
  width: 1.25vw;
  height: 2.22vh;
  cursor: pointer;
`;

// Badges Counter Shopping Cart Itens, vulgo Bolinha vermelha que mostra quantos itens tem no carrinho.
const Badge = styled.span`
  background: rgba(255, 26, 108, 1);
  width: 0.95vw; // Ajustado em 0,3px para comportar 99 itens, após isto precisa ser feito auste de layout.
  height: 1.69vh; // Ajustado em 0,3px para comportar 99 itens, após isto precisa ser feito auste de layout.
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.47vw;
  /* position: relative;
  top: -21%;
  left: -0.36vw; */
  position: absolute;
  top: -0.23vh;
  left: 0.85vw;
  cursor: pointer;
`;

const BadgeNumber = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: 1.48vh;
  line-height: 100%;
  cursor: pointer;
   
`;

// Links
const MenuLink = styled(Link)`
  // Não configurado
`;
const IconLink = styled(Link)`
  // Não configurado
`;
