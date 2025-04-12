import Header  from "../components/header/Header.tsx";
import Loja from "../page/loja/Loja.tsx";
import { RouterStyled } from "./routerStyled.tsx";

function RouterApp() {
  return (
    <RouterStyled>
      <Header/>
      <Loja />
    </RouterStyled>
  );
}

export default RouterApp;
