import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { mid1, mid2 } from "../assets/breakpoints"
import image from "../assets/images/moving.gif";
import usePageTitle from "../assets/hooks/usePageTitle"

import Logo from "../components/common/Logo"

const S = {}

const Home = () => {
  usePageTitle("Geoid")

  return (
    <S.Home>
      <S.Grid>
        <S.Bg />
        <S.GridRow>
          <S.GridCol>
            <Logo size="6rem" />
          </S.GridCol>
          <S.GridCol2>
            <img src="location.png" alt="earth" />
          </S.GridCol2>
        </S.GridRow>
      </S.Grid>

      <S.Container>
        <h2>Learn about the Earth</h2>
        <S.GridRow2>
          <div>
            <Link to="countries">Learn about Countries</Link>
          </div>
          <div>
            <Link to="tracker">Track and Locate IP Addresses</Link>
          </div>
        </S.GridRow2>
      </S.Container>
    </S.Home>
  )
}

S.Home = styled.main`
  background-image: url(${image});
  text-align: center;
`;

S.Grid = styled.div`
  display: grid;
  position: relative;
`;

S.Bg = styled.div`
  position: absolute;
  inset: 0;
  bottom: 50%;
  background: var(--app-color-2);
  z-index: 2;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5em;
    padding: 3em;
    width: 100%;
    border-radius: 0 0 50em 50em;
    background: linear-gradient(to bottom, white, transparent);
  }

  @media (min-width: ${mid1}) {
    bottom: 0;
    right: 45%;
    border-radius: 0 50% 50% 0;

    ::after {
      left: initial;
      right: -280px;
      bottom: 0;
      top: 0;
      width: 300px;
      border-radius: 0;
      background: linear-gradient(to right, white, transparent);
      clip-path: circle(50% at 94% 49%);
    }
  }
`;

S.GridRow = styled.div`
  display: grid;
  max-width: 1000px;
  margin-inline: auto;
  padding-block: 8em;

  @media (min-width: ${mid2}) {
    grid-template-columns: 1fr 1fr;
  }
`;

S.GridCol = styled.div`
  align-self: center;
  justify-self: center;
  z-index: 5;
`;

S.GridCol2 = styled(S.GridCol)`
  position: relative;
  
  img {
    display: inline-block;
    width: 100%;
    padding-inline: 10%;
    position: sticky;
    top: 5em;
    padding-top: 1em;
  }

  @media (max-width: ${mid1}) {
    margin-top: 2em;
    min-height: 900px;
  }
`;

S.Container = styled.div`
  h2 {
    color: white;
    font-size: 3em;
    padding-bottom: 3em;
  }

  @media (min-width: ${mid1}) {
    h2 {
      padding-top: 3em;
    }
  }
`;

S.GridRow2 = styled(S.GridRow)`
  padding-top: 0;

  div {
    justify-self: center;
    aspect-ratio: 1 / 1;
    width: 300px;
    border-radius: 50%;
    background: conic-gradient(var(--app-color-2) 40%, var(--app-color) 40%);
    color: var(--text-color-1);
    font-size: 2rem;
    transition-duration: .1s;
    transition-timing-function: cubic-bezier(.22,.68,0,1.71);;
    text-align: center;
    overflow: hidden;
    margin-block: 1em;

    @media (min-width: ${mid1}) {
      grid-template-columns: initial;
      width: 350px;
    }

    @media (min-width: ${mid2}) {
      grid-column: 1 / -1;
      width: 100%;
      max-width: 500px;
      margin: 0;
      font-size: 2.2rem;
      --box-shadow: 
          3rem 5rem 1rem rgba(255, 255, 255, 0.3), 
        0 3rem 5rem rgba(255, 255, 255, 0.3);
      
      :nth-child(odd) {
        justify-self: start;
        background: conic-gradient(var(--app-color-2) 135deg, var(--app-color) -225deg);
        :hover {
          box-shadow: 20rem var(--box-shadow);
          background: conic-gradient(var(--app-color) 135deg, var(--app-color-2) -225deg);
        }
      }
      :nth-child(even) {
        justify-self: end;
        background: conic-gradient(var(--app-color-2) 225deg, var(--app-color) 135deg);
        :hover {
          box-shadow: -20rem var(--box-shadow);
          background: conic-gradient(var(--app-color) 225deg, var(--app-color-2) 135deg);
        }
      }
    }

    a {
      width: inherit;
      aspect-ratio: 1 / 1;
      padding-block: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    :hover {
      background: conic-gradient(var(--app-color) 80%, var(--app-color-2) 20%);
      transform: scale(1.1) rotate(-10deg);
      box-shadow: 50rem 3rem 5rem 4rem rgba(255, 255, 255, 0.3);
    }
  }
`

export default Home