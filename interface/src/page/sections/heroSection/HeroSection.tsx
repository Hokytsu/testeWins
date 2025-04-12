import * as S from "./heroSectionStyled";
import { background } from "../../../assets";
import { Header } from "../../../components/header/headerStyled";

function HeroSection() {
  return (
    <S.HeroSection>
      <S.Details></S.Details>
      <S.Gradient/>
      <S.Background src={background} />
      
    </S.HeroSection>
  );
}

export default HeroSection;
