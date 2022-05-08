import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Footer from "./Footer";
import Home from "./pages/Home"
import Countries from "./pages/Countries"
import "./App.css"

const S = {}

const App = () => {
  return (
    <S.App>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </Router>
      <Footer />
    </S.App>
  )
}

S.App = styled.div`
  --app-green: #00bb77;

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;

export default App;