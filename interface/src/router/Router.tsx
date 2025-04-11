import React, { useEffect } from "react";
import Loja from "../page/loja/Loja.tsx";
import { RouterStyled } from "./routerStyled.tsx";
import { Uniform } from "../api/products/uniforms.ts";

function RouterApp() {
  useEffect(() => {
    Uniform.getJsonData()
      .then((data) => console.log("Dados da API:", data))
      .catch((error) => console.error("Erro na API:", error));
  }, []);
  return (
    <RouterStyled>
      <Loja />
    </RouterStyled>
  );
}

export default RouterApp;
