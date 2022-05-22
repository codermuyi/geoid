import { Suspense, lazy } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import Loader from "./components/Loader"
const SharedLayout = lazy(() => import("./components/SharedLayout"))
const Error = lazy(() => import("./components/Error"))
const Home = lazy(() => import("./pages/Home"))
const Countries = lazy(() => import("./pages/Countries"))
const Country = lazy(() => import("./pages/Country"))
const Locator = lazy(() => import("./pages/Locator"))
const About = lazy(() => import("./pages/About"))

const S = {}
const GlobalStyles = createGlobalStyle`
  :root {
    --app-green: #00bb77;
    --light-green: rgba(0, 187, 119, .2);
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  a.link:link {
    color: var(--app-green);
  }
  a.link:visited {
    color: var(--light-green);
  }
  a.link:hover {
    color: black;
  }
  a.link:active {
    color: black;
  }
`

const App = () => {
  return (
    <S.App>
      <Router>
        <Suspense fallback={<Loader />}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="countries" element={<Countries />} />
              <Route path="countries/:country" element={<Country />} />
              <Route path="locator" element={<Locator />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Error page />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </S.App>
  )
}

S.App = styled.div`
  
`;

export default App;