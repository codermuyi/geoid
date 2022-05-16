/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import styled from "styled-components"
import Select from "react-select"
import { mid2 } from "../media-queries"
import searchIconUrl from "../assets/search.svg"

import CountryCard from "../components/CountryCard"
import Loader from "../components/Loader"
import Error from "../components/Error"
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
  const [region, setRegion] = useState("")
  const [hasLoaded, setHasLoaded] = useState(false)
  const [failedToFetch, setFailedToFetch] = useState(false)

  useEffect(() => {
    if (retrieveData() === null || retrieveData() === undefined) {
      fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => {
          setFailedToFetch(false)
          setHasLoaded(true)
          setCountriesData(data)
          storeData(data)
        })
        .catch(() => setFailedToFetch(true))
        .finally(() => setHasLoaded(true))
    } else {
      setCountriesData(retrieveData())
      setHasLoaded(true)
    }
  }, []);


  function storeData(data) {
    localStorage.setItem("countries-data", JSON.stringify(data))
  }

  function retrieveData() {
    return JSON.parse(localStorage.getItem("countries-data"))
  }

  function handleChange(e) {
    if (e.target) {
      let value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
      setSearchInput(value)
      return
    }
    setRegion(e.value)
    setSearchInput("")
  }

  const countries = countriesData.map((country, index) => {
    const comp = <CountryCard key={index} {...country} />
    const nameList = Object.values(country.name)

    if (searchInput) {
      if (nameList.includes(searchInput.trim()) || nameList.join("").toLowerCase().includes(searchInput.toLowerCase().trim())) {
        return comp
      }
    } else {
      if (!region) {
        return comp
      } else if (country.region.toLowerCase() === region) {
        return comp
      }
    }
  })

  return (
    <div className="page">
      <Filter>
        <Search>
          <SearchIcon />
          <SearchInput
            value={searchInput}
            onChange={handleChange}
          />
        </Search>
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
          <Error fetch /> :
          hasLoaded ?
            <CountryList>
              {countries ? countries : <p>No country with such name</p>}
            </CountryList> :
            <Loader />
      }
      <ScrollToTop />
    </div>
  )
}

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

const Search = styled.div`
  position: relative;
  width: 100%;
  max-width: 40em;
  padding: 0;
  margin-block: 2em;
  border-radius: 1em;
`

const SearchInput = styled.input.attrs(props => ({
  type: "search",
  placeholder: "Search for a country...",
}))`
  padding: 1.3em;
  border: 0;
  border-radius: inherit;
  background: white;
  width: 100%;
  text-indent: 2.2em;
  font-weight: 600;
  font-size: .9em;
  letter-spacing: .09em;

  :placeholder {
    color: hsl(0, 0%, 52%);
  }
`

const SearchIcon = styled.img.attrs(props => ({
  src: searchIconUrl,
  alt: "Search Icon",
}))`
  position: absolute;
  bottom: .8em;
  left: .7em;
  width: 1.6em;
  height: 1.6em;
  opacity: .5;
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