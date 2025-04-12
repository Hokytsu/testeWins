import ChamferButton from "../../../utils/button/chamferButton/ChamferButton.tsx";
import * as S from "./userSideStyled.tsx";
import { Globo, Sair } from "../../../../assets/index.ts";
import { get } from "lodash";
import { getImageUrl } from "../../../../utils/getImageUrl.ts";

function UserSide() {
  function handleClickLeave() {
    console.log("clicou");
    // Lógica do sair,
  }
  return (
    <S.UserSide>
      <ChamferButton
        width={11.67}
        height={4.44}
        contentwidth={11.35}
        contentheight={3.89}
        bgheight={4.21}
        bgwidth={11.54}
        bordercolor="#e13283"
        backgroundcolor="rgba(0, 9, 22, 1)"
        contentcolor="#e13283"
        hovercolor="#b42356"
        clickcolor="#f3f3f3"
        action={handleClickLeave}
        children={
          <S.ContentButton>
            <S.Exit>SAIR</S.Exit>
            <S.IconExit src={Sair} alt="" />
          </S.ContentButton>
        }
      />
      <S.UserPlace>
        <S.IconGlobo src={Globo} alt="" />
        <S.PlaceAvatar>
              {/*<S.AvatarUser src={getImageUrl("user", "id")}/> */} {/*TODO: VER SE NÃO TEM O AVATAR NA API*/} 
        </S.PlaceAvatar>
      </S.UserPlace>
    </S.UserSide>
  );
}

export default UserSide;
