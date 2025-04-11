import RouterApp from "./router/Router";
import { GlobalStyled } from "./globalStyled.tsx";
import React from "react";

function App() {
  return (
    <>
      <GlobalStyled />
      <RouterApp />
    </>
  );
}

export default App;
