import styled from "styled-components"
import { mid1, mid2 } from "../media-queries"
import image from "../moving.gif";
import { Link } from "react-router-dom"
const S = {}

const Home = () => {
  return (
    <S.Home>
      <S.Grid>
        <S.Bg />
        <S.GridRow>
          <S.GridCol1>
            <h1>Geoid</h1>
          </S.GridCol1>
          <S.GridCol2>
            <img src="location.png" alt="earth" />
          </S.GridCol2>
        </S.GridRow>
      </S.Grid>

      <S.Container>
        <h2>Explore the Earth</h2>
        <S.GridRow2>
          <div>
            <Link to="/countries">Learn about Countries</Link>
          </div>
          <div>
            <Link to="">Track and Locate IP Addresses</Link>
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
  background: white;
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

  @media (min-width: ${mid1}) {
    grid-template-columns: 1fr 1fr;
  }
`;

S.GridCol = styled.div`
  align-self: center;
  justify-self: center;
  z-index: 5;
`;

S.GridCol1 = styled(S.GridCol)`
  /* border: .1em solid var(--app-green); */
  background: conic-gradient(white 40%, var(--app-green) 40%);
  padding: .1em;
  margin-bottom: .3em;
  border-radius: 10px;
  text-align: center;

  h1 {
    font-size: 5rem;
  }

  @media (min-width: ${mid2}) {
    h1 {
      font-size: 6rem;
      letter-spacing: .1em;
    }
  }
`;

S.GridCol2 = styled(S.GridCol)`
  position: relative;
  
  img {
    display: inline-block;
    width: 100%;
    padding-inline: 10%;
    position: sticky;
    top: 0;
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
    border: 0em solid var(--app-green);
    aspect-ratio: 1 / 1;
    width: 300px;
    border-radius: 50%;
    background: conic-gradient(white 40%, var(--app-green) 40%);
    color: black;
    font-size: 2rem;
    transition-duration: .1s;
    transition-timing-function: cubic-bezier(.22,.68,0,1.71);;
    text-align: center;
    overflow: hidden;
    margin-block: 1em;

    a {
      cursor: pointer;
      display: block;
      width: inherit;
      aspect-ratio: 1 / 1;
      padding-block: 3em;
      text-decoration: none;
      color: inherit;
    }

    :hover {
      /* background: var(--app-green); */
      background: conic-gradient(var(--app-green) 80%, white 20%);
      transform: scale(1.3) rotate(-10deg)
    }
  }
`;

export default Home