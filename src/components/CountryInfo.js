import styled from "styled-components"
import { Link } from "react-router-dom"
import { mid1, mid2, lg1, lg2 } from "../assets/breakpoints"
import Map from "../components/Map"
import Button from "../components/Button"
import Error from "../components/Error"

const CountryInfo = ({ country, data }) => {
  if (data) return (
    <Content>
      <Col>
        <img src={data.flags.svg} alt={`Flag of ${data.name.common}`} loading="lazy"/>
      </Col>
      <Col>
        <h2 className="name">{data.name.common}</h2>
        <div className="list-of-info">
          <div className="first">
            <p className="other-info">Native Name(s): <span className="light-text">{Object.values(data?.name.nativeName).map(v => v.common).join(", ")}</span></p>
            <p className="other-info">Population: <span className="light-text">{data.population.toLocaleString()}</span></p>
            <p className="other-info">Region: <span className="light-text">{data.region}</span></p>
            <p className="other-info">Sub Region: <span className="light-text">{data.subregion}</span></p>
            <p className="other-info">Capital: <span className="light-text">{data.capital}</span></p>
          </div>
          <div className="second">
            <p className="other-info">Top Level Domain: <span className="light-text">{data.tld}</span></p>
            <p className="other-info">Currencies: <span className="light-text">{Object.values(data.currencies).map(v => v.name)}</span></p>
            <p className="other-info">Languages: <span className="light-text">{Object.values(data.languages).join(", ")}</span></p>
          </div>
        </div>
        <div style={{ marginTop: 30 }}>
          <h3>Border Countries:</h3>
          <div className="bottons">
            {data.borders?.map((name, i) =>
              <Button key={i} pad={1} size={5}>
                <Link to={`/countries/${name}`}>{name}</Link>
              </Button>
            )}
          </div>
        </div>
      </Col>
      <div id="map">
        <Map country={country} />
      </div>
    </Content>
  )
  return <Error page />
}

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 2em;
  width: 92%;
  margin-inline: auto;

  img {
    width: 100%;
    max-height: max-content;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    margin-inline: auto;
  }

  p {
    margin-left: 2px !important;
  }

  .name {
    margin-top: 0;
    font-weight: 800;
  }

  .other-info {
    font-weight: 600;
    font-size: .95em;
    margin: .4em;
    .light-text {
      font-weight: 300;
    }
  }

  .second {
    margin-top: 2em;
  }

  @media (min-width: ${mid1}) {
    .list-of-info {
      display: flex;
      align-items: flex-start;
      gap: 1em;
    }
    .second {
      margin-top: 0;
    }
  }
  @media (min-width: ${lg1}) {
    .list-of-info {
      gap: 3em;
    }
  }
  @media (min-width: ${lg2}) {
    img {
      width: 80%;
    }
    .list-of-info {
      gap: 6em;
    }
  }
`

const Content = styled.div`
  max-width: 1500px;
  margin-inline: auto;
  display: grid;
  grid-row: auto auto auto;
  
  @media (min-width: ${mid2}) {
    grid-template-columns: 1fr 1fr;
    grid-row: auto auto;
    gap: 3em;
    justify-content: center;

    #map {
      grid-column: 1 / -1;
    }
  }
`

export default CountryInfo