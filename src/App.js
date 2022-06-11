import { Suspense, lazy, useState, createContext } from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import Loader from "./components/common/Loader"
const SharedLayout = lazy(() => import("./components/SharedLayout"))
const Error = lazy(() => import("./components/common/Error"))
const Home = lazy(() => import("./pages/Home"))
const Countries = lazy(() => import("./pages/Countries"))
const Country = lazy(() => import("./pages/Country"))
const Tracker = lazy(() => import("./pages/Tracker"))
const About = lazy(() => import("./pages/About"))

const ThemeContext = createContext()

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false)

  return (
    <S.App>
      <Router>
        <GlobalStyles isDarkMode={isDarkMode} />
        <Suspense fallback={<Loader />}>
          <ThemeContext.Provider value={{ isDarkMode, setDarkMode }} >
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="countries" element={<Countries />} />
                <Route path="countries/:countryName" element={<Country />} />
                <Route path="tracker" element={<Tracker />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Error page />} />
              </Route>
            </Routes>
          </ThemeContext.Provider>
        </Suspense>
      </Router>
    </S.App>
  )
}

const S = {}
const GlobalStyles = createGlobalStyle`
  :root {
    --app-color: #00bb77;
    --app-color-2: white;
    --app-color-3: hsl(0, 0%, 98%);
    --light-app-color: rgba(0, 187, 119, .4);
    --text-color: #202124;
    --text-color: hsl(200, 15%, 8%);
    --text-color-2: #555555;
  }

  ${props => props.isDarkMode && css`
    :root {
      --app-color-2: hsl(207, 26%, 17%);
      --app-color-3: hsl(209, 23%, 22%);
      --text-color: white;
      --text-color-2: white;
    }
  `}

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  a.link:link {
    color: var(--app-color);
  }
  a.link:visited {
    color: var(--light-app-color);
    text-decoration: underline;
  }
  a.link:hover {
    color: var(--text-color);
  }
  a.link:active {
    color: var(--text-color);
  }
`

S.App = styled.div`
  
`;

export { ThemeContext }
export default App