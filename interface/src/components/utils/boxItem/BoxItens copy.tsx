import { get } from "lodash";
import { UtilsInterface } from "../../../interface/Utils.Interface";
import * as S from "./boxItensStyled";
import { getImageUrl } from "../../../utils/getImageUrl";
import { useLayoutEffect, useRef, useState } from "react";
import { use } from "framer-motion/client";
import HexagonBackground from "../hexagonBackground/HexagonBackground";

function BoxItens({ ...props }: UtilsInterface) {
  const { type, img, nameItem, valueItem, colection } = props;
  const [imgUrl, setImgUrl] = useState<string>("");

  useLayoutEffect(() => {
    if (img && type) {
      setImgUrl(getImageUrl(type, img));
    }
  }, []);

  return type === "weapons" ? (
    <S.BoxGuns>
      <HexagonBackground
        type={""}
        width={0}
        height={0}
        trapezio={false}
        stroketop={false}
      />
      <S.ImgGuns src={imgUrl} />
      <S.Name>{nameItem}</S.Name>
      <S.PointedValue>{valueItem}</S.PointedValue>
    </S.BoxGuns>
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
      <S.PointedValue>{valueItem}</S.PointedValue>
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
