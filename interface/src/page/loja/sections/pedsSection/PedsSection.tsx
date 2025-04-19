import { useState, useMemo } from "react";
import ChamferButton from "../../../../components/utils/button/chamferButton/ChamferButton";
import * as S from "./pedsSectionStyled";
import Pads from "./utils/peds/Peds";
import { usePedsQuery } from "../../../../hooks/usePedsQuery";
import { ArrowButtons, Ground } from "../../../../assets";

function PadsSection() {
  const { data, isLoading, isError } = usePedsQuery();
  const [activeIndex, setActiveIndex] = useState(0);

  // Always calculate displayedItems, don't conditionally return before this
  const displayedItems = useMemo(() => data || [], [data]);

  const visibleItems = useMemo(() => {
    if (!displayedItems.length) return [];
    
    if (displayedItems.length < 3) {
      return displayedItems.map((item) => ({
        ...item,
        position: "center",
        visible: true,
      }));
    }

    const total = displayedItems.length;
    return [
      {
        ...displayedItems[(activeIndex - 2 + total) % total],
        position: "far-left" as const,
        visible: false,
      },
      {
        ...displayedItems[(activeIndex - 1 + total) % total],
        position: "left" as const,
        visible: true,
      },
      {
        ...displayedItems[activeIndex],
        position: "center" as const,
        visible: true,
      },
      {
        ...displayedItems[(activeIndex + 1) % total],
        position: "right" as const,
        visible: true,
      },
      {
        ...displayedItems[(activeIndex + 2) % total],
        position: "far-right" as const,
        visible: false,
      },
    ];
  }, [displayedItems, activeIndex]);

  // Now we can do conditional returns after all hooks have been called
  if (isLoading) return null;
  if (isError) return null;

  const handleClickJoin = () => {
    // Lógica click
  };

  const handleNavigation = (side: "left" | "right") => {
    const maxIndex = displayedItems.length - 1;
    setActiveIndex((prev) => {
      if (side === "right") return prev === maxIndex ? 0 : prev + 1;
      if (side === "left") return prev === 0 ? maxIndex : prev - 1;
      return prev;
    });
  };

  return (
    <S.PadsSection>
      <S.PadsContainer>
        <S.Infos>
          <S.Title>PEDDINGS</S.Title>
          <S.Description>
            {displayedItems[activeIndex]?.description}
          </S.Description>
          <ChamferButton
            width={11.67}
            height={4.44}
            contentwidth={11.35}
            contentheight={3.89}
            bgheight={4.21}
            bgwidth={11.54}
            bordercolor="rgba(73, 150, 213, 1)"
            backgroundcolor="rgba(0, 9, 22, 1)"
            contentcolor="rgba(73, 150, 213, 1)"
            hovercolor="#3c7aad"
            clickcolor="#f3f3f3"
            action={handleClickJoin}
          >
            <S.ContentButton>
              <S.Join>Acessar Jogo</S.Join>
            </S.ContentButton>
          </ChamferButton>
        </S.Infos>

        <S.Button side="left" onClick={() => handleNavigation("left")}>
          <S.Arrow src={ArrowButtons} side="left" />
        </S.Button>

        <S.BasePads src={Ground} />

        <S.Button side="right" onClick={() => handleNavigation("right")}>
          <S.Arrow src={ArrowButtons} side="right" />
        </S.Button>

        <S.CarouselWrapper>
          {visibleItems.map((ped) => (
            <Pads
              key={ped.price}
              nameItem={ped.name}
              valueItem={ped.price}
              img={ped.images[0]}
              position={ped.position}
              isActive={ped.position === "center"}
              isVisible={ped.visible}
            />
          ))}
        </S.CarouselWrapper>
      </S.PadsContainer>
    </S.PadsSection>
  );
}

export default PadsSection;