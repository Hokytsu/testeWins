import Header  from "../components/header/Header.tsx";
import Loja from "../page/loja/Loja.tsx";
import { RouterStyled } from "./routerStyled.tsx";

function RouterApp() {
  return (
    <RouterStyled>
      <Header/> {/*Em um site de vdd deixaria o Header sticky*/}
      <Loja />
    </RouterStyled>
  );
}

export default RouterApp;
