import styled from "styled-components"

import Footer from "./Footer";
import Home from "./pages/Home"


const S = {}

const App = () => {
  return (
    <S.App>
      <Home />
      <Footer />
    </S.App>
  )
}

S.App = styled.div`
  --app-green: #00bb77;
  color: #333333;
`;

export default App;