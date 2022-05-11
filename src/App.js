import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import SharedLayout from "./components/SharedLayout"
import Home from "./pages/Home"
import Countries from "./pages/Countries"
import Locator from "./pages/Locator"
import "./App.css"

const S = {}

const App = () => {
  return (
    <S.App>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="countries" element={<Countries />} />
            <Route path="locator" element={<Locator />} />
          </Route>
        </Routes>
      </Router>
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