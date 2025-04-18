import HeroSection from "./sections/heroSection/HeroSection";
import UniformSection from "./sections/uniformSection/UniformSection";
import * as S from "./lojaStyled";
import PadsSection from "./sections/pedsSection/PedsSection";

function Loja() {
  return (
    <S.LojaPage>
      <HeroSection />
      <UniformSection/>
      <PadsSection/>
    </S.LojaPage>
  );
}

export default Loja;
