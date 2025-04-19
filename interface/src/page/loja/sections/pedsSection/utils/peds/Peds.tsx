import { memo, useEffect, useState } from "react";
import * as S from "./pedsStyled";
import { getImageUrl } from "../../../../../../utils/getImageUrl";



function Pads({ ...props }: any) {
  const { img, nameItem, valueItem, position, isActive, isVisible } = props;
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    if (img) setImgUrl(getImageUrl("peds", img));
  }, [img]);

  console.log(position);
  return (
    
      <S.Container $position={position} $isVisible={isVisible} >
        {isActive && (
          <S.Infos>
            <S.Name>{nameItem}</S.Name>
            <S.Value>{valueItem} Quantions</S.Value>
          </S.Infos>
        )}
        <S.Pads $imgurl={imgUrl} $isActive={isActive} />
      </S.Container>
  
  );
}

export default memo(Pads);