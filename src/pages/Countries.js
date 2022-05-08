import { useState, useEffect } from "react"
import styled from "styled-components"

import Header from "../components/Header"
import Country from "../components/CountryCard"

const Countries = () => {
  const [countriesData, setCountriesData] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/usa")
      .then(res => res.json())
      .then(data => setCountriesData(data))
      .catch(error => console.log(error.message))
  }, []);

  function handleSearch(e) {
    setSearchInput(e.target.value)
  }

  console.log(countriesData, searchInput)
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

  :placeholder {
    color: hsl(0, 0%, 98%);
  }
`

const CountryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  margin: 3em 2em;
`

export default Countries