import ChamferButton from "../../../lib/button/chamferButton/ChamferButton.tsx";
import * as S from "./userSideStyled.tsx";
function UserSide() {
  return (
    <S.UserSide>
      <ChamferButton
        
        width={11.67}
        height={4.44}
        contentWidth={11.35}
        contentHeight={3.89}
        bgHeight={4.26}
        bgWidth={11.56}
        borderColor="rgba(255, 26, 108, 1)"
        backgroundColor="rgba(0, 9, 22, 1)"
        contentColor="rgba(255, 26, 108, 1)"
        hoverColor="#b42356"
        clickColor="#f3f3f3"
      >
        <h1>test</h1>
      </ChamferButton>
    </S.UserSide>
  );
}

export default UserSide;
