import styled from "styled-components"
import { mid1, mid2 } from "../media-queries"
import image from "../moving.gif";
const S = {}

const Home = () => {
  return (
    <S.Home>
      <S.Grid>
        <S.WhiteBg />
        <S.GridRow>
          <S.GridCol1>
            <h1>Geoid</h1>
          </S.GridCol1>
          <S.GridCol2>
            <img src="location.png" alt="earth" />
          </S.GridCol2>
        </S.GridRow>
      </S.Grid>

      <div style={{padding: 20}}>
        <h2>Explore the Earth</h2>
        <S.GridRow2>
          <div>
            Learn about Countries
          </div>
          <div>
            Track and Locate IP Addresses
          </div>
        </S.GridRow2>
      </div>
    </S.Home>
  )
}

S.Home = styled.main`
  background-image: url(${image});
`;

S.Grid = styled.div`
  display: grid;
  position: relative;
`;

S.WhiteBg = styled.div`
  position: absolute;
  inset: 0;
  bottom: 50%;
  background: white;
  z-index: 2;

  ::after {
    content: "";
    position: absolute;
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
  border: .1em solid var(--app-green);
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
    width: 100%;
    padding-inline: 10%;
    position: sticky;
    top: 0;
  }

  @media (max-width: ${mid1}) {
    margin-top: 2em;
    min-height: 900px;
  }
`;

S.GridRow2 = styled(S.GridRow)`
  background: #333;

  div {
    padding: 3em;
    border: 0em solid var(--app-green);
    margin: 1em;
    min-height: 300px;
    border-radius: 50%;
    background: linear-gradient(-50deg, white 50%, #00bb77 10%);
    color: black;
    font-size: 2em;
    transition-duration: .3s;
    cursor: pointer;

    :hover {
      color: white;
      background: var(--app-green);
    }
  }
`;

export default Home