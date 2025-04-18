import { useState } from "react";
import * as S from "./uniformSectionStyled";
import  Uniforms  from "./utils/uniforms/Uniforms";

function UniformSection() {
  const [active, setActive] = useState<string>("uniformes");

  
  return (
    <S.UniformSection>
      <S.Details />
      <S.Gradient />
      <S.NavBar>
        <S.DetailsLeft />
        <S.Li>
          <S.Option
            active={active === "caixas" ? true : false}
            onClick={() => setActive("caixas")}
          >
            Caixas
          </S.Option>
          <S.Option
            active={active === "uniformes" ? true : false}
            onClick={() => setActive("uniformes")}
          >
            Uniformes
          </S.Option>
          <S.Option
            active={active === "colecao" ? true : false}
            onClick={() => setActive("colecao")}
          >
            Coleção
          </S.Option>
          <S.Shadow active={active} />
          <S.Line active={active} />
        </S.Li>
        <S.DetailsRight />
      </S.NavBar>


      <Uniforms/>
    </S.UniformSection>
  );
}

export default UniformSection;
