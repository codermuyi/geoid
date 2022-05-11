/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import styled from "styled-components"
import Select from "react-select"
import { mid2 } from "../media-queries"

import Header from "../components/Header"
import Country from "../components/CountryCard"
import Loader from "../components/Loader"
import FetchError from "../components/FetchError"
import ScrollToTop from "../components/ScrollToTop"

// import offLineCountriesData from "../countries-data"

const regionFilterOptions = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
]

const Countries = () => {
  const [countriesData, setCountriesData] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [region, setRegion] = useState("africa")
  const [hasLoaded, setHasLoaded] = useState(false)
  const [failedToFetch, setFailedToFetch] = useState(false)

  useEffect(() => {
    setHasLoaded(false)

    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json())
      .then(data => {
        setFailedToFetch(false)
        setHasLoaded(true)
        setCountriesData(data)
      })
      .catch(() => setFailedToFetch(true))
      .finally(() => setHasLoaded(true))
  }, []);

  function handleChange(e) {
    if (e.target) {
      let value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      setSearchInput(value)
      return
    }
    setRegion(e.value)
  }

  return (
    <div>
      <Header />
      <Container>
        <Filter>
          <Search 
            value={searchInput}
            onChange={handleChange}
          />
          <Select
            options={regionFilterOptions}
            onChange={handleChange}
            placeholder="Filter by region"
            className="region-filter-container"
            classNamePrefix="region-filter"
          />
        </Filter>

        {
          failedToFetch ?
            <FetchError /> :
            !hasLoaded ?
              <Loader /> :
              <CountryList>
                {countriesData.map((country, index) => {
                  if (country.region.toLowerCase() === region) {
                    return <Country key={index} {...country} />;
                  }
                })}
              </CountryList>
        }
      </Container>
      <ScrollToTop />
    </div>
  )
}

const Container = styled.div`
  padding: 1em;
  background-color: hsl(0, 0%, 98%);
  margin-top: 5rem;
  color: hsl(200, 15%, 8%);
`

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin-inline: auto;

  > * {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .region-filter__control {
    border-color: var(--app-green);
    padding: .4em 1em;
  }

  .region-filter__menu-list {
    padding: .1em 1em;

    > *:hover {
      background-color: rgba(0, 187, 119, .5);
    }
  }

  @media (min-width: ${mid2}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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