import { useState, useEffect } from "react"
import styled from "styled-components"
import { mid2 } from "../media-queries"

import Header from "../components/Header"
import Country from "../components/CountryCard"

const Countries = () => {
  const [countriesData, setCountriesData] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then(res => res.json())
      .then(data => setCountriesData(data))
      .catch(error => console.log(error))
  }, []);

  function handleSearch(e) {
    setSearchInput(e.target.value)
  }

  console.log(searchInput)

  return (
    <div>
      <Header />
      <Container>
        <Search value={searchInput} onChange={handleSearch} />

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
    color: hsl(0, 0%, 98%);
  }
`

const CountryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3em;
  margin: 3em 2em;

  @media (min-width: mid2) {
    margin-inline: 3.5em;
  }
`

export default Countries