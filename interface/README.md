# Teste Front-end Wins

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Sobre:
  Desafio frontend da WinsPvp url: https://www.figma.com/design/3w2qNK38osruxC14aBlJR5/Teste-de-FrontEnd?node-id=1-988&t=IEhoMqjyuW0YNuXk-0

  Favor ler comentários para algumas especificações, mocks, estruras, etc.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Instalação & Inicialização:
  npm install (Instalação)
  npm run start (Inicialização)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Bibliotecas:
  react-router-dom (Rotas)
  axios (Consulta e interceptação de erros)
  react-query (Controle da consulta e gerencia de cache)
  styled-components (Estilização)
  frame-motion (Animação)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Comentário:

  SIZE: Medidas truncadas já que no figma está definido width e height como fixed no components.(Imaginando a full screen viwer que em no fiveM, não basedo em responsividade de site e sim do Nui in Game)
    - Converções feitas para vh & vw com base na resolução de 1920x1080 baseado em tela cheia(F11).
    - Para a versão de site poderia usar rem, clamp para deixar responsivo junto com @media
    
  ROUTER: Foi somente instalado a biblioteca, não será configurado as rotas por não haver outros paths.

  STYLED: import * as S from "..." , Feito desta maneira para facilitar a importação de novos Styleds-Comps e tambem 
  para facilitar a identificação do que é Estilo e do que é component, já que S.NomeDoComp != NomeDoComp (Tanto para Comp e tanto para Assets)

  OBJECTS: O correto seria criar SVGR para cada sgv ou poligono, afim de otimizar, foi criado o CHAMFERBUTTON E O HEXAGONO, entretando será utilados os SVGs brutos afim de agilizar a velocidade de code no teste, já que não a tanto tempo.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Map:


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# TODO:
    Utils
        [X] : Buttons
        [ ] : Place Itens
        [X] : Hex BG
        [X] : Convert SVG to REACT-COMPONENT
        [ ] :

    FIRTS-SECTIONS
        [X] : Header
        [X] : BG
        [X] : Buttons leave logic
        [ ] : Interaction Cart
        [ ] : Interaction Houver
        [X] : Interaction Globe
        [ ] : Search Img
        [ ] :

    SECOND-SECTIONS
        [ ] : FILTER LOGIC
        [ ] : Details BG
        [ ] :   
    ...