import { HeaderStyled } from "./headerStyled";
import Menu from "./utils/menu/Menu";

function Header() {
  return (
  <HeaderStyled>
    <section id="headerLogo"></section>
    <Menu/>
  </HeaderStyled>)
}

export default Header;
