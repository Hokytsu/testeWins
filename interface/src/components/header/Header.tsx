import { HeaderStyled, Logo, LogoPVP, Divider } from "./headerStyled";
import Menu from "./utils/menu/Menu";
import {Youtube, Logo, LogoPVP} from "../../assets"



function Header() {
  return (
    <HeaderStyled>
    <section>
      <Logo src={Logo} alt="Logo-Wins" />
      <Divider/>
      <LogoPVP src={LogoPVP} alt="Logo-PVP" />
    </section>
    <Menu />
  </HeaderStyled>)
}

export default Header;
