import { memo, useEffect, useState } from "react";
import * as S from "./pedsStyled";

import { getImageUrl } from "../../../../../../utils/getImageUrl";
import { motion, AnimatePresence } from "framer-motion";
function Pads({ ...props }: any) {
  const { img, nameItem, valueItem, activeList, active } = props;
  const [imgUrl, setImgUrl] = useState<string>("");
  const [position, setPosition] = useState<"left" | "center" | "right" | "hidden">("hidden");
  const [hidden, setHidden] = useState<boolean | null>(null);

useEffect(() => {
  if (activeList && active !== undefined && activeList.length > 0) {
    const totalItems = activeList.length;
    const currentItem = activeList[active];
    const prevIndex = active - 1 < 0 ? totalItems - 1 : active - 1; // Volta para o último se for o primeiro
    const nextIndex = active + 1 >= totalItems ? 0 : active + 1; // Vai para o primeiro se for o último
    const prevItem = activeList[prevIndex];
    const nextItem = activeList[nextIndex];

    if (currentItem.name === nameItem) {
      setHidden(false); // Item central → totalmente visível
    } else if (prevItem.name === nameItem || nextItem.name === nameItem) {
      setHidden(true); // Itens laterais → visíveis, mas estilizados diferente
    } else {
      setHidden(null); // Itens fora do trio → não renderiza
    }
  }
}, [activeList, active, nameItem]);

  useEffect(() => {
    if (img) {
      setImgUrl(getImageUrl("peds", img));
    }
  }, [img]);

  return (
    hidden != null && (
      <S.Container>
        <S.Infos>
          <S.Name hiddenStyle={hidden}>{nameItem} </S.Name>
          <S.Value hiddenStyle={hidden}>{valueItem} Quantions</S.Value>
        </S.Infos>
        <S.Pads hiddenStyle={hidden} $imgurl={imgUrl} />
      </S.Container>
    )
  );
}

export default memo(Pads);
