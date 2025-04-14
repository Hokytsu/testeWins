import { UtilsInterface } from "../../../interface/Utils.Interface";
import * as S from "./boxItensStyled";
import { getImageUrl } from "../../../utils/getImageUrl";
import { useLayoutEffect, useRef, useState } from "react";
import { use } from "framer-motion/client";
import HexagonBackground from "../hexagonBackground/HexagonBackground";
import { getClassSkin } from "../../../utils/getClass";
import Hex from "../hexagonBackground/hex.svg";
import { motion, Variants } from "framer-motion";

function BoxItens({ ...props }: UtilsInterface) {
  const { type, img, nameItem, valueItem, colection } = props;
  const [imgUrl, setImgUrl] = useState<string>("");
  const [typeClass, setTypeClass] = useState<string>("");
  const [animationState, setAnimationState] = useState<string>("slideRight");
  useLayoutEffect(() => {
    if (img && type) {
      setImgUrl(getImageUrl(type, img));
    }
    if (nameItem) {
      setTypeClass(getClassSkin(nameItem));
      console.log(typeClass);
    }
  }, []);

  // const boxAnimations: Variants = { // TODO: Quando tiver animação, usar
  //   hidden: {
  //     x: "-8vw", //TODO: arrumar medidas
  //     opacity: 0,
  //   },
  //   slideRight: {//TODO: arrumar animação entrada
  //     x: "4vw",//TODO: arrumar medidas
  //     opacity: 1,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeIn",
  //     },
  //   },
  // };
  return type === "weapons" ? (
    <S.BoxWeapons
    // TODO: Quando tiver animação, usar

    // as={motion.div}
    // variants={boxAnimations}
    // initial="hidden"
    // animate={animationState}
    >
      {/* <HexagonBackground
        type={} nome da IMG, ele já pega o type automaticamente
        width={} LARGURA DO HEX
        height={} ALTURA HEX
        trapezio={} 
        stroketop={}
      />  
      
      
      Funciona para por fundo hex personaliado nas box, para n ter 30 svgs diferentes, mas por questão de tempo para entregar o projeto vou usar 
      o svg padrão sem se preocupar com o type do item.*/}

      {/*Hexagono SVG só apra exemplificação*/}
      <S.Hex src={Hex} />

      {/*Imagem arma*/}
      <S.ImgContainer $imgurl={imgUrl} />

      {/*Nome*/}
      <S.InfosWeapons>
        <S.Name>{nameItem}</S.Name>

        {/*Valor*/}
        <S.PointedContainer>
          <S.PointedValue>{valueItem} Quantions</S.PointedValue>
        </S.PointedContainer>
      </S.InfosWeapons>
    </S.BoxWeapons>
  ) : // Outras Box Reutilizaveis, mas como não foi usado ainda, vou deixar comentado.
  // ) : type === "uniforms" ? (
  //   <S.BoxUniforms>
  //     <HexagonBackground
  //       type={""}
  //       width={0}
  //       height={0}
  //       trapezio={false}
  //       stroketop={false}
  //     />
  //     <S.ImgUniforms src={imgUrl} />
  //     <S.Name>{nameItem}</S.Name>
  //     <S.PointedContainer>
  //       <S.PointedValue>{valueItem}</S.PointedValue>
  //     </S.PointedContainer>
  //   </S.BoxUniforms>
  // ) : type === "featureds" ? (
  //   <S.BoxFeatureds>
  //     <HexagonBackground
  //       type={""}
  //       width={0}
  //       height={0}
  //       trapezio={false}
  //       stroketop={false}
  //     />
  //     <S.ImgFeatureds src={imgUrl} />
  //     <S.Colection>{colection}</S.Colection>
  //     <S.PointedName>{nameItem}</S.PointedName>
  //   </S.BoxFeatureds>
  null;
}
export default BoxItens;
