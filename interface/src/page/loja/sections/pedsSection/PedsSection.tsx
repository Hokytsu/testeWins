import { useEffect, useState } from "react";
import ChamferButton from "../../../../components/utils/button/chamferButton/ChamferButton";
import * as S from "./pedsSectionStyled";
import Pads from "./utils/peds/Peds";
import { usePedsQuery } from "../../../../hooks/usePedsQuery";
import { ArrowButtons, Ground } from "../../../../assets";

function PadsSection() {
  const { data, isLoading, isError } = usePedsQuery();
  const [displayed, setDisplayed] = useState<any[]>([]); //TODO: FAZER TYPAR
  const [active, setActive] = useState<number>(1); //TODO: FAZER TYPAR

  useEffect(() => {
    if (!data) return;
    setDisplayed(data);
  }, [data]);

  if (isLoading) return; //img de loading
  if (isError) return; //img de error

  function handleClickJoin() {
    //Lógica click
  }
  function handleClick(side: string) {
    const max = displayed.length - 1;
    if (side === "left" && active > 0) {
      setActive(active - 1);
    } else if (side === "right" && active < max) {
      setActive(active + 1);
    } else if (side === "right" && active === max) {
      setActive(0);
    } else if (side === "left" && active === 0) {
      setActive(max);
    }
  }
  return (
    <S.PadsSection>
      <S.PadsContainer>
        <S.Infos>
          <S.Title>PEDDINGS</S.Title>
          <S.Description> {displayed[active]?.description}</S.Description>
          {/*TODO: FAZER SHADOW BUTTON*/}
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
            children={
              <S.ContentButton>
                <S.Join>Acessar Jogo</S.Join>
              </S.ContentButton>
            }
          />
        </S.Infos>
        <S.Button side="left" onClick={() => handleClick("left")}>
          <S.Arrow src={ArrowButtons} side="left" />
        </S.Button>
        <S.BasePads src={Ground} />
        <S.Button side="right" onClick={() => handleClick("right")}>
          <S.Arrow src={ArrowButtons} side="right" />
        </S.Button>
        {displayed.map((ped) => (
          <Pads
            key={ped.name}
            nameItem={ped.name}
            valueItem={ped.value}
            img={ped.images[0]}
            activeList={displayed}
            active={active}
          />
        ))}
      </S.PadsContainer>
    </S.PadsSection>
  );
}

export default PadsSection;
