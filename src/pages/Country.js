import { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams, Link } from "react-router-dom"
import { mid1, mid2, lg1, lg2 } from "../assets/breakpoints"
import Loader from "../components/Loader"
import Error from "../components/Error"
import Button from "../components/Button"

const Country = () => {
  const { country } = useParams()
  const [countryData, setCountryData] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)
  const [failedToFetch, setFailedToFetch] = useState(false)

  useEffect(() => {
    setHasLoaded(false)

    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(res => res.json())
      .then(data => {
        setCountryData(data[0])
        setHasLoaded(true)
      })
      .catch(() => setFailedToFetch(true))
      .finally(() => setHasLoaded(true))
  }, [country])

  // console.log(countryData)

  return (
    <div className="page">
      <br />
      <Button><Link to="/countries">Back</Link></Button>
      {
        failedToFetch ?
          <Error fetch /> :
          hasLoaded ?
            <Content>
              <Col>
                <img src={countryData?.flags.svg} alt={`Flag of ${countryData.name.common}`} />
              </Col>
              <Col>
                <h2 className="name">{countryData.name.common}</h2>
                <div className="list-of-info">
                  <div className="first">
                    <p className="other-info">Native Name(s): <span className="light-text">{Object.values(countryData?.name.nativeName).map(v => v.common).join(", ")}</span></p>
                    <p className="other-info">Population: <span className="light-text">{countryData.population.toLocaleString()}</span></p>
                    <p className="other-info">Region: <span className="light-text">{countryData.region}</span></p>
                    <p className="other-info">Sub Region: <span className="light-text">{countryData.subregion}</span></p>
                    <p className="other-info">Capital: <span className="light-text">{countryData.capital}</span></p>
                  </div>
                  <div className="second">
                    <p className="other-info">Top Level Domain: <span className="light-text">{countryData.tld}</span></p>
                    <p className="other-info">Currencies: <span className="light-text">{Object.values(countryData.currencies).map(v => v.name)}</span></p>
                    <p className="other-info">Languages: <span className="light-text">{Object.values(countryData.languages).join(", ")}</span></p>
                  </div>
                </div>
                <div style={{ marginTop: 30 }}>
                  <h3>Border Countries:</h3>
                  <div className="bottons">
                    {countryData.borders?.map((v, i) => 
                      <Button key={i}>
                        <Link to={`/countries/${v}`}>{v}</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Col>
            </Content> :
            <Loader />
      }
    </div>
  )
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

  @media (min-width: ${mid2}) {
    display: flex;
    gap: 3em;
    justify-content: center;

    ${Col} {
      flex: 1;
    }
  }
`

export default Country