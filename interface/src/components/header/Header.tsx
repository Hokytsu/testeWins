import * as S from "./headerStyled"; 
import Menu from "./utils/menu/Menu";
import { Logo, LogoPVP} from "../../assets";

function Header() {
  return (
    <S.HeaderContainer>
      <S.LogoSection id="header__logo-section">
        <S.WinsMain src={Logo} alt="Logo-Wins" />{" "}
        {/*<S.LogoLink to= {}></S.LogoLink>*/}
        <S.DividerLine />
        <S.WinsPVP src={LogoPVP} alt="Logo-PVP" />
        {/*<S.LogoLink to= {}></S.LogoLink>*/}
      </S.LogoSection>
      <Menu />
    </S.HeaderContainer>
  );
}

export default Header;
