import styled from "styled-components";
export { Container, Header, Uniforms, Title, Options };

const Container = styled.div`
  width: 65vw;
  height: 97.41vh;
`;

// HEADER
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 65vw;
  height: 7.41vh;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.67vw;
  line-height: 95%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: rgba(255, 255, 255, 1);
`;
const Options = styled.div`
  width: 7.29vw;
  background: rgba(255, 255, 255, 1);

  height: 2.96vh;

  clip-path: polygon(
    4.29% 14.06%,
    7.86% 0%,
    100% 0%,
    100% 73.75%,
    96.07% 87.5%,
    92.5% 100%,
    0% 100%,
    0% 32.5%,
    4.29% 14.06%
  );
`;
// UNIFORMS
const Uniforms = styled.div`
  width: 65vw;
  height: 90vh;
  background-color: rebeccapurple;
`;
