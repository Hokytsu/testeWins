import { useEffect, useLayoutEffect, useState } from "react";
import BoxItens from "../../../../../components/utils/boxItem/BoxItens";
import * as S from "./uniformsStyled";
import { useUniformsQuery } from "../../../../../hooks/useUniformsQuery";


function Uniforms({ place }: { place: string }) {
  const { data, isLoading, isError } = useUniformsQuery();
  // const { dataBox, isLoading, isError } = useBoxsQuery();
  // const { dataColections, isLoading, isError } = useCollectionsQuery();
  const [displayed, setDisplayed] = useState<any[]>([]); //TODO:  TYPAR
  const [cache, setCache] = useState<any[]>([]); //TODO:  TYPAR
  const [filter, setFilter] = useState<any[]>([]); //TODO:  TYPAR
console.log(cache)
  useEffect(() => {
    if (!data) return;
    console.log(place);
    if (place === "uniformes") {
      setCache(data);
  
    }
  
    // else if (place==="caixas"){//SETAR DATA DAS CAIXAS
    //   setCache(dataBox);
    // }else if (place==="colecao"){//SETAR DATA DAS COLECOES
    //   setCache(dataColections);
    // }
  }, [data]);

  useLayoutEffect(() => {
    if (place === "uniformes") {
      setDisplayed(cache);//TODO: FAZER LOGICA DE FILTER 
    } else if (place === "caixas") {
      setDisplayed([]); //SETAR DATA DAS CAIXAS
    } else if (place === "colecao") {
      setDisplayed([]); //SETAR DATA DAS COLECOES
    }
  }, [place, filter,cache]);

  if (isLoading) return; //img de loading
  if (isError) return; //img de error

  return (
    <S.Container>
      <S.Header>
        <S.Title>UNIFORMES</S.Title>
        <S.Options></S.Options>
        {/*TODO: FAZER LOGICA DE OPTS*/}
      </S.Header>
      <S.Uniforms>
        {displayed.map((weapon, index) => (
          <BoxItens
            key={weapon.name}
            type="uniforms"
            nameItem={weapon.name}
            valueItem={weapon.price}
            img={weapon.images[0]}
          />
        ))}
      </S.Uniforms>
    </S.Container>
  );
}

export default Uniforms;

