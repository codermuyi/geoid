import { useState, useEffect } from "react"
import styled from "styled-components"
import Select from "react-select"
import { mid2 } from "../media-queries"

import Header from "../components/Header"
import Country from "../components/CountryCard"

const Countries = () => {
  const [countriesData, setCountriesData] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [region, setRegion] = useState("africa")

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then(res => res.json())
      .then(data => setCountriesData(data))
      .catch(error => console.log(error))
  }, [region]);

  function handleChange(e) {
    if (e.target) {
      setSearchInput(e.target.value)
      return
    }
    setRegion(e.value)
  }

  console.log(searchInput, region)

  const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' }
  ]

  return (
    <div>
      <Header />
      <Container>
        <div>
          <Search value={searchInput} onChange={handleChange} />
          <Select 
            noOptionsMessage={"Filter by region"}
            value={region} 
            options={options} 
            onChange={handleChange} 
          />
        </div>

        <CountryList>
          {countriesData.map((country, index) =>
            <Country key={index} {...country} />
          )}
        </CountryList>
      </Container>
    </div>
  )
}

const Container = styled.div`
  padding: 1em;
  background-color: hsl(0, 0%, 98%);
  margin-top: 5rem;
  color: hsl(200, 15%, 8%);
`

const Search = styled.input.attrs(props => ({
  type: "search",
  placeholder: "Search for a country...",
}))`
  padding: 1.3em;
  border: 0;
  border-radius: 1em;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 40em;
  margin-block: 2em;
  text-indent: 2em;

  :placeholder {
    color: hsl(0, 0%, 52%)
  }
  
  @media (min-width: ${mid2}) {
    margin-left: 4em;
  }
`

const CountryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3em;
  margin: 3em 2em;

  @media (min-width: ${mid2}) {
    margin-inline: 3.5em;
  }
`

export default Countries