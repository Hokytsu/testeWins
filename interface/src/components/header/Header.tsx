import { HeaderStyled, Logo, LogoPVP, Divider } from "./headerStyled";
import Menu from "./utils/menu/Menu";
import {Youtube} from "../../assets"



function Header() {
  return (
    <HeaderStyled>
    <section>
      <Youtube></Youtube>
      <Divider/>
     
    </section>
    <Menu />
  </HeaderStyled>)
}

export default Header;
