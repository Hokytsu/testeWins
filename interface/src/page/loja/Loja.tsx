import BoxItens from "../../components/utils/boxItem/BoxItens";
import HeroSection from "../sections/heroSection/HeroSection";
import * as S from "./lojaStyled";

function Loja() {
  return (
    <S.LojaPage>
      <HeroSection />
      <BoxItens type="weapons" nameItem="Test Procution"  valueItem={20} img="WEACOM0027" colection="Test Procution"/>
    </S.LojaPage>
  );
}

export default Loja;
// WEAEPI0014
// WEACOM0027
// WEALEG0007