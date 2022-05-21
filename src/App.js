import { Suspense, lazy } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import Loader from "./components/Loader"
const SharedLayout = lazy(() => import("./components/SharedLayout"))
const Error = lazy(() => import("./components/Error"))
const Home = lazy(() => import("./pages/Home"))
const Countries = lazy(() => import("./pages/Countries"))
const Country = lazy(() => import("./pages/Country"))
const Locator = lazy(() => import("./pages/Locator"))

const S = {}

const App = () => {
  return (
    <S.App>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="countries" element={<Countries />} />
              <Route path="countries/:country" element={<Country />} />
              <Route path="locator" element={<Locator />} />
              <Route path="*" element={<Error page />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </S.App>
  )
}

S.App = styled.div`
  --app-green: #00bb77;
  --light-green: rgba(0, 187, 119, .2);

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;

export default App;