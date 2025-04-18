import { useEffect, useState } from "react";
import * as S from "./pedsStyled";
import { UtilsInterface } from "../../../../../../interface/Utils.Interface";
import { getImageUrl } from "../../../../../../utils/getImageUrl";

function Pads({ ...props }: UtilsInterface) {
  const { img, nameItem, valueItem, activeList } = props;
  const [imgUrl, setImgUrl] = useState<string>("");
  
  const [hidden, setHidden] = useState<boolean | null>(null);

  useEffect(() => {
   console.log(activeList);
    if (activeList) {
      if (activeList[1] === nameItem) {
        setHidden(false);
      } else if (activeList[0] === nameItem || activeList[2] === nameItem) {
        setHidden(true);
      }
    }
  }, [activeList, nameItem]);

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
        <S.Pads  hiddenStyle={hidden}$imgurl={imgUrl} />
      </S.Container>
    )
  );
}

export default Pads;
