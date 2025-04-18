import HeroSection from "../sections/heroSection/HeroSection";
import UniformSection from "../sections/uniformSection/UniformSection copy";
import * as S from "./lojaStyled";

function Loja() {
  return (
    <S.LojaPage>
      <HeroSection />
      <UniformSection/>
    </S.LojaPage>
  );
}

export default Loja;
