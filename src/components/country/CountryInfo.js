import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { mid1, mid2, lg1, lg2 } from "../../assets/breakpoints"
import Button from "../common/Button"
import Error from "../common/Error"
import Map from "../Map"
import AboutCountry from "./AboutCountry"
import countryCodes from "../../assets/country-codes.json"
// Country code url in myjson: http://myjson.dit.upm.es/api/bins/h4vj

const CountryInfo = ({ country, data }) => {
  if (data) {
    let commonName = data.name.common,
      flagSrc = data.flags.svg,
      nativeName = data.name.nativeName ? new Set(Object.values(data.name.nativeName).map(v => v.common)).join(", ") : "None",
      population = data.population.toLocaleString(),
      region = data.region,
      subregion = data.subregion ? data.subregion : "None",
      capital = data.capital ? data.capital : "None",
      tld = data.tld,
      currencies = data.currencies ? Object.values(data.currencies).map(v => v.name) : "None",
      languages = data.languages ? Object.values(data.languages).join(", ") : "None",
      borders = data.borders ? data.borders : ["None"]

    return (
      <Content>
        <Col>
          <img src={flagSrc} alt={`Flag of ${commonName}`} loading="lazy" />
        </Col>
        <Col>
          <h2 className="name">{data.name.common}</h2>
          <div className="list-of-info">
            <div className="first">
              <p className="other-info">Native Name(s): <span className="light-text">{nativeName}</span></p>
              <p className="other-info">Population: <span className="light-text">{population}</span></p>
              <p className="other-info">Region: <span className="light-text">{region}</span></p>
              <p className="other-info">Sub Region: <span className="light-text">{subregion}</span></p>
              <p className="other-info">Capital: <span className="light-text">{capital}</span></p>
            </div>
            <div className="second">
              <p className="other-info">Top Level Domain: <span className="light-text">{tld}</span></p>
              <p className="other-info">Currencies: <span className="light-text">{currencies}</span></p>
              <p className="other-info">Languages: <span className="light-text">{languages}</span></p>
            </div>
          </div>
          <div style={{ marginTop: 30 }}>
            <h3>Border Countries:</h3>
            <div className="border-links">
              {borders?.map((name, i) => {
                if (name !== "None")
                  return <Button
                    key={i}
                    as={Link}
                    to={`/countries/${countryCodes[name]}`}
                    padY={0.5}
                    padX={1}
                    size={6}
                    fontSize={.7}
                  >
                    {countryCodes[name]}
                  </Button>
                return <p key={i}>{name}</p>
              })}
            </div>
          </div>
        </Col>
        <AboutCountry country={country} />
        <div id="map">
          <Map country={country} />
        </div>
      </Content>
    )
  }

  return <Error page />
}

const Content = styled.div`
  max-width: 2000px;
  margin-inline: auto;
  display: grid;
  margin-bottom: 4rem;
  
  @media (min-width: ${mid2}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-content: center;
    
    #map {
      grid-column: 1 / -1;
    }
  }

  @media (min-width: ${lg2}) {
    #map {
      grid-column: 2 / -1;
    }
  }
`

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

export default CountryInfo