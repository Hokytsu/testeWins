import * as S from "./menuStyled";
import { SetaFechado, SetaAberto, Carrinho } from "../../../../assets";
import { useRef } from "react";

const Menu = () => {
  const houverRef= useRef(null)
  return (
    <S.NavContainer id="headerMenu">
      <S.MenuUl>
        <S.MenuLi>
          <S.MenuNoLink>HOME</S.MenuNoLink>
          {/*<S.MenuLink to= {}></S.MenuLink>*/}
        </S.MenuLi>
        <S.MenuLi>
          <S.MenuNoLink> NOTÍCIAS</S.MenuNoLink>
          {/*<S.MenuLink to= {}></S.MenuLink>*/}
        </S.MenuLi>
        <S.MenuLi houverRef={houverRef}>
          <S.MenuNoLink>LOJA</S.MenuNoLink>
          <S.ArrowState src={{}} alt="Seta"/>
          {/*<S.MenuLink to= {}></S.MenuLink>*/}
        </S.MenuLi>
        <S.MenuLi>
          <S.MenuNoLink>ESTATÍSTICAS</S.MenuNoLink>
          {/*<S.MenuLink to= {}></S.MenuLink>*/}
        </S.MenuLi>
        <S.MenuLi>
          <S.MenuNoLink>CAMPEONATO</S.MenuNoLink>
          {/*<S.MenuLink to= {}></S.MenuLink>*/}
        </S.MenuLi>
        <S.MenuLi>
          <S.MenuNoLink>SUPORTE</S.MenuNoLink>
          {/*<S.MenuLink to= {}></S.MenuLink>*/}
        </S.MenuLi>
        <S.MenuLi>

          <S.IconNoLink src={Carrinho} alt="Carrinho" />
          {/*<S.IconLink to= {}></S.IconLink>*/}
        </S.MenuLi>
      </S.MenuUl>
    </S.NavContainer>
  );
};
("");

export default Menu;
