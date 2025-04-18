import * as S from "./menuStyled";
import { SetaAberto, SetaFechado, Carrinho } from "../../../../assets";
import { useEffect, useState } from "react";
const Menu = () => {
  const [hoveredElementId, setHoveredElementId] = useState<string | null>(null);
  const [Badge, setBadge] = useState<number | null>(8); // TODO:  Fazer mock com mutate simulando a Api, ou descobrir se já temos esse valor na API


  function handleMouseHovered(id: string, type: string) {
 
    if (type === "enter") {
      setHoveredElementId(id);
    }
    if (type === "leave") {
      setHoveredElementId(null);
    }
  }

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
        <S.MenuLi
          id="loja"
          onMouseEnter={(e) => handleMouseHovered(e.currentTarget.id, "enter")}
          onMouseLeave={(e) => handleMouseHovered(e.currentTarget.id, "leave")}
        >
          <S.MenuNoLink>LOJA</S.MenuNoLink> {/*TODO: Criar lógica box de Loja*/}
          <S.ArrowState
            src={hoveredElementId === "loja" ? SetaAberto : SetaFechado}
            alt=""
          />
          {/*<S.MenuLink to= {}></S.MenuLink>*/}
        </S.MenuLi>
        <S.MenuLi
          id="estatisticas"
          onMouseEnter={(e) => handleMouseHovered(e.currentTarget.id, "enter")}
          onMouseLeave={(e) => handleMouseHovered(e.currentTarget.id, "leave")}
        >
          <S.MenuNoLink>ESTATÍSTICAS</S.MenuNoLink>
          <S.ArrowState
            src={hoveredElementId === "estatisticas" ? SetaAberto : SetaFechado}
            alt=""
          />
          {/*<S.MenuLink to= {}></S.MenuLink>*/}{" "}
          {/*TODO: Criar lógica box de estatisticas*/}
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
          {Badge && (
            <S.Badge>
              <S.BadgeNumber>{Badge}</S.BadgeNumber>
            </S.Badge>
          )}
        </S.MenuLi>
      </S.MenuUl>
    </S.NavContainer>
  );
};

export default Menu;
