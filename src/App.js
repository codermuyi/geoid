import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import SharedLayout from "./components/SharedLayout"
import Error from "./components/Error"
import Home from "./pages/Home"
import Countries from "./pages/Countries"
import Country from "./pages/Country"
import Locator from "./pages/Locator"

const S = {}

const App = () => {
  return (
    <S.App>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="countries" element={<Countries />} />
            <Route path="countries/:country" element={<Country />} />
            <Route path="locator" element={<Locator />} />
            <Route path="*" element={<Error page />} />
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