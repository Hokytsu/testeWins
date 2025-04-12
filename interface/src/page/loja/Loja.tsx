import BoxItens from "../../components/utils/boxItem/BoxItens copy";
import HeroSection from "../sections/heroSection/HeroSection";
import * as S from "./lojaStyled";

function Loja() {
  return (
    <S.LojaPage>
      <HeroSection />
      <BoxItens type="weapons" nameItem="Test Procution"  valueItem={20} img="WEAEPI0014" colection="Test Procution"/>
    </S.LojaPage>
  );
}

export default Loja;
