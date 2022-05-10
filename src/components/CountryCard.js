import { useEffect } from "react"
import styled from 'styled-components'

const CountryCard = (props) => {
  const {name, flags, population, region, capital} = props
  
  useEffect(() => {

  }, [])

  return (
    <StyledCountry>
      <Flag src={flags.png} alt={name.common} />
      <CountryInfo>
        <p className="name">{"Country Name" && name.common}</p>
        <p className="other-info">Population: <span className="light-text">{population.toLocaleString()}</span></p>
        <p className="other-info">Region: <span className="light-text">{region}</span></p>
        <p className="other-info">Capital: <span className="light-text">{props?.capital ? capital[0] : "No Capital"}</span></p>
      </CountryInfo>
    </StyledCountry>
  )
}

const StyledCountry = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  flex-shrink: 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.04);
  background-color: white;
`

const Flag = styled.img`
  width: 100%;
  height: 150px;
`

const CountryInfo = styled.div`
  padding: 0 1em;
  height: 200px;
  overflow: hidden;

  .name { 
    font-size: 1.5em;
    font-weight: 700;
    margin-block: .8em;
    width: 240px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .other-info {
    padding: 0;
    margin: .15em 0;
    font-weight: 600;
    font-size: 1.1em;

    .light-text {
      font-weight: 200;
      font-size: 1.15em;
    }
  }
`

export default CountryCard