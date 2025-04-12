import RouterApp from "./router/Router";
import { GlobalStyled } from "./globalStyled.tsx";
import { getClassSkin } from "./utils/getClass.ts";


function App() {
 
  return (
    <>
      <GlobalStyled />
      <RouterApp />
    </>
  );
}

export default App;
