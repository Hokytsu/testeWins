import styled from "styled-components";
export { Value, Name, Pads, Container, Infos };

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 20.31vw;
  gap: 5.19vh;
  height: 61.39vh;
  position: relative;
`;
const Value = styled.div<{ hiddenStyle: boolean }>`
  ${(props) => props.hiddenStyle && `display: none;`}
  background: rgba(86, 142, 255, 1);
  width: 8.85vw;
  height: 2.96vh;
  clip-path: polygon(
    5.85% 0%,
    94.15% 0%,
    100% 50%,
    94.15% 100%,
    5.85% 100%,
    0% 50%,
    5.85% 0%
  );
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: 0.94vw;
  line-height: 175%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
`;
const Infos = styled.div`
  width: 10vw;
  height: 5.93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.h2<{ hiddenStyle: boolean }>`
  ${(props) => props.hiddenStyle && `display: none;`}
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: 0.83vw;
  line-height: 95%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
`;
const Pads = styled.div<{ $imgurl: string | undefined; hiddenStyle: boolean }>`
  position: absolute;
  right: 50%;
  top: 17.78vh;
  width: 20.31vw;
  height: 52.04vh;
  ${(props) =>
    props.hiddenStyle &&
    `filter:blur(1.17vw);
width: 14.54vw;
height: 42.79vh;
top: 21.15vh;`};

  overflow: hidden;

  background-image: url(${(props) => props.$imgurl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateX(50%);
`;
