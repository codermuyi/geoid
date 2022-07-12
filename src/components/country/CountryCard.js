import styled from 'styled-components/macro'
import { Link } from "react-router-dom"
import useTheme from "../../assets/theme"
import { formatName } from "../../assets/utilities"

const CountryCard = (props) => {
  const theme = useTheme()
  const { name, flags, population, region, capital } = props

  return (
    <Country isLight={!theme.isDarkMode}>
      <Link to={formatName(name.common)}>
        <Flag src={flags.png} alt={`Flag of ${name.common}`} />
        <CountryInfo>
          <p className="name">{"Country Name" && name.common}</p>
          <p className="other-info">Population: <span className="light-text">{population.toLocaleString()}</span></p>
          <p className="other-info">Region: <span className="light-text">{region}</span></p>
          <p className="other-info">Capital: <span className="light-text">{props?.capital ? capital[0] : "No Capital"}</span></p>
        </CountryInfo>
      </Link>
    </Country>
  )
}

const Country = styled.div`
  --box-shadow-color: ${props => props.isLight ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)"};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  flex-shrink: 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.04);
  background-color: var(--app-color-2);
  transition-duration: .12s;
  border-radius: 10px;

  
  a {
    line-height: 0;
  }

  :hover {
    transform: scale(1.05);
    box-shadow: 0 4px 6px var(--box-shadow-color);
  }
`

const Flag = styled.img`
  width: 100%;
  height: 150px;
`

const CountryInfo = styled.div`
  padding: 0 1em;
  height: 200px;
  overflow: hidden;
  border-top: .5em solid rgba(0, 0, 0, .1);
  line-height: normal;

  .name { 
    font-size: 1.4em;
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

    .light-text {
      font-weight: 200;
      font-size: 1.1em;
    }
  }
`

export default CountryCard