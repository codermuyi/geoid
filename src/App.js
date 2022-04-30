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
  min-height: 100vh;
`;

export default App;