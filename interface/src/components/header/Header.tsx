import * as S from "./headerStyled";
import Menu from "./utils/menu/Menu";
import { Logo, LogoPVP } from "../../assets";
import UserSide from "./utils/userSide/UserSide";

function Header() {
  return (
    <S.HeaderContainer>
      <S.Header>
        
        {/*Logos*/}
        <S.LogoSection id="header__logo-section">
          <S.WinsMain src={Logo} alt="" />
          {/*<S.LogoLink to= {}></S.LogoLink>*/}
          <S.DividerLine />
          <S.WinsPVP src={LogoPVP} alt="" />
          {/*<S.LogoLink to= {}></S.LogoLink>*/}
        </S.LogoSection>

        {/*Nav*/}
        <Menu />

        {/*Lado do Usuario*/}
        <UserSide />
      </S.Header>
    </S.HeaderContainer>
  );
}

export default Header;
