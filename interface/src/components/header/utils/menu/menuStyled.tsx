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
};

// Nav
const NavContainer = styled.nav``;

// ul
const MenuUl = styled.ul``;

//li
const MenuLi = styled.li``;

// Icons
const IconNoLink = styled.img``;
const MenuNoLink = styled.h1``;
const ArrowState = styled.img`
`;


// Badges Counter Shopping Cart, vulgo Bolinha vermelha que mostra quantos itens tem no carrinho.
const Badge = styled.span``;

// Links
const MenuLink = styled(Link)`
  // Não configurado
`;
const IconLink = styled(Link)`
  // Não configurado
`;
