import { useState, useEffect } from "react"
import styled from "styled-components"
import Select from "react-select"
import { mid2 } from "../media-queries"

import Header from "../components/Header"
import Country from "../components/CountryCard"
import Loader from "../components/Loader"

const Countries = () => {
  const [countriesData, setCountriesData] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [region, setRegion] = useState("africa")
  const [hasLoaded, setHasLoaded] = useState(false)
  const [failedToFetch, setFailedToFetch] = useState(false)

  useEffect(() => {
    setHasLoaded(false)

    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then(res => res.json())
      .then(data => {
        setFailedToFetch(false)
        setHasLoaded(true)
        setCountriesData(data)
      })
      .catch(() => setFailedToFetch(true))
      .finally(() => setHasLoaded(true))
  }, [region]);

  function handleChange(e) {
    if (e.target) {
      setSearchInput(e.target.value)
      return
    }
    setRegion(e.value)
  }

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
        <div className="form">
          <Search value={searchInput} onChange={handleChange} />
          <Select
            options={options}
            onChange={handleChange}
            placeholder="Filter by region"
          />
        </div>

        {
          failedToFetch ? 
            <p style={{padding: "2em 0", textAlign: "center", fontSize: "3em"}}>Could not load. Check your data connections</p> :
            !hasLoaded ? 
              <Loader /> :
              <CountryList>
              {countriesData.map((country, index) =>
                <Country key={index} {...country} />
              )}
            </CountryList>
        }
      </Container>
    </div>
  )
}

const Container = styled.div`
  padding: 1em;
  background-color: hsl(0, 0%, 98%);
  margin-top: 5rem;
  color: hsl(200, 15%, 8%);

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > * {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      > * {
        border-color: var(--app-green);
        padding: .1em 2em;
      }
    }

    @media (min-width: ${mid2}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`

const Search = styled.input.attrs(props => ({
  type: "search",
  placeholder: "Search for a country...",
}))`
  padding: 1.3em;
  border: 0;
  border-radius: 1em;
  background: white;
  width: 100%;
  max-width: 40em;
  margin-block: 2em;
  text-indent: 2em;

  :placeholder {
    color: hsl(0, 0%, 52%)
  }
  
  /* @media (min-width: ${mid2}) {
    margin-left: 4em;
  } */
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