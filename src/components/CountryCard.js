import styled from 'styled-components'

const CountryCard = (props) => {
  const {name, flags} = props
  console.log(props)
  return (
    <StyledCountry>
      <Flag src={flags.png} alt={name.common} />
      <CountryInfo>
        <p class="name">{"Country Name" && name.common}</p>
      </CountryInfo>
    </StyledCountry>
  )
}

const StyledCountry = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  flex-shrink: 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.04);
  background-color: white;
`

const Flag = styled.img`
  width: 100%;
  /* height: 200px; */
`

const CountryInfo = styled.div`
  padding: 0 1em;

  .name { 
    font-size: 1.5em;
    font-weight: 600;
  }
`

export default CountryCard