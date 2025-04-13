import { get } from "lodash";
import { UtilsInterface } from "../../../interface/Utils.Interface";
import * as S from "./boxItensStyled";
import { getImageUrl } from "../../../utils/getImageUrl";
import { useLayoutEffect, useRef, useState } from "react";
import { use } from "framer-motion/client";
import HexagonBackground from "../hexagonBackground/HexagonBackground";
import { getClassSkin } from "../../../utils/getClass";

function BoxItens({ ...props }: UtilsInterface) {
  const { type, img, nameItem, valueItem, colection } = props;
  const [imgUrl, setImgUrl] = useState<string>("");
  const [typeClass, setTypeClass] = useState<string>("");

  useLayoutEffect(() => {
    if (img && type) {
      setImgUrl(getImageUrl(type, img));
      
    }
    if (nameItem){
      setTypeClass(getClassSkin(nameItem));
      console.log(typeClass);
    }


  }, []);

  return type === "weapons" ? (
    <S.BoxWeapons>
      <HexagonBackground
        type={typeClass}
        width={4.17}
        height={10.37}
        trapezio={false}
        stroketop={true}
      />
      <S.ImgWeapons src={imgUrl} />
      <S.InfosWeapons>
        <S.Name>{nameItem}</S.Name>
        <S.PointedContainer>
          {" "}
          <S.PointedValue>{valueItem} Quantions</S.PointedValue>
        </S.PointedContainer>
      </S.InfosWeapons>
    </S.BoxWeapons>
  ) : type === "uniforms" ? (
    <S.BoxUniforms>
      <HexagonBackground
        type={""}
        width={0}
        height={0}
        trapezio={false}
        stroketop={false}
      />
      <S.ImgUniforms src={imgUrl} />
      <S.Name>{nameItem}</S.Name>
      <S.PointedContainer>
        <S.PointedValue>{valueItem}</S.PointedValue>
      </S.PointedContainer>
    </S.BoxUniforms>
  ) : type === "featureds" ? (
    <S.BoxFeatureds>
      <HexagonBackground
        type={""}
        width={0}
        height={0}
        trapezio={false}
        stroketop={false}
      />
      <S.ImgFeatureds src={imgUrl} />
      <S.Colection>{colection}</S.Colection>
      <S.PointedName>{nameItem}</S.PointedName>
    </S.BoxFeatureds>
  ) : null;
}
export default BoxItens;
