import * as S from "./heroSectionStyled";
import { background } from "../../../assets";
import CyberDetails from "../utils/CyberDetails";
import { motion, AnimatePresence } from "framer-motion";
import BoxItens from "../../../components/utils/boxItem/BoxItens";
import { useWeaponsQuery } from "../../../hooks/useWeaponsQuery";
import { useEffect, useState } from "react";
import {Animations} from './carrosel'

function HeroSection() {
  const { data, isLoading, isError } = useWeaponsQuery();
  const [displayedWeapons, setDisplayedWeapons] = useState<any[]>([]);

  useEffect(() => {
    if (!data) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedWeapons((prev) => {
        if (currentIndex >= data.length) {
          currentIndex = 0;
          return prev;
        }
        return [data[currentIndex++], ...prev].slice(0, 7);
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading weapons</div>;

  return (
    <S.HeroSection>
      <S.Details />
      <S.Gradient />
      <S.Background src={background} />

      <S.ContainerContend>
        {/* Cabeçalho */}
        <S.ContainerText>
          <S.SectionTitle>
            EXPLORE AS <br />
            SKINS ESPECIAIS
          </S.SectionTitle>
          <S.SectionSubTitle>
            Veja todos os produtos disponíveis com Quantions
          </S.SectionSubTitle>
        </S.ContainerText>

        {/* Título das armas */}
        <S.ContainerTitle>
          <div className="pointedShadow" />
          <CyberDetails type="left" />
          <S.PointedTitle>
            <S.Title>ARMAS SOLTAS</S.Title>
          </S.PointedTitle>
          <CyberDetails type="right" />
        </S.ContainerTitle>

        {/* Carrossel de armas */}
        <S.ContainerWeapons>
          <AnimatePresence>
            <motion.div
              layout // Animação de layout para o container
              style={{
                display: "flex",
                gap: "0.41vw",
                position: "relative",
                overflow: "visible",
                padding: "0.5vw"
              }}
            >
              {displayedWeapons.map((weapon, index) => (
                <motion.div
                  key={weapon.name}
                layout
                variants={Animations}
                initial="initialPlace"
                animate="animatePlace"
                exit="exitPlace"
                  style={{
                    position: "relative",
                    zIndex: displayedWeapons.length - index
                  }}
                >
                  <BoxItens
                  key={weapon.name}
                    type="weapons"
                    nameItem={weapon.name}
                    valueItem={weapon.price}
                    img={weapon.images[0]}
            
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </S.ContainerWeapons>
      </S.ContainerContend>
    </S.HeroSection>
  );
}

export default HeroSection;