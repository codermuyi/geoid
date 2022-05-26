/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import styled from "styled-components/macro"
import Select from "react-select"
import { mid2 } from "../assets/breakpoints"
import searchIconUrl from "../assets/images/search.svg"
import useFetch from "../assets/useFetch"
import CountryCard from "../components/CountryCard"
import ScrollToTop from "../components/ScrollToTop"
import Error from "../components/Error"
import { CountryListSkeleton } from "../components/CustomSkeleton"

const regionFilterOptions = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
]

const Countries = () => {
  const [searchInput, setSearchInput] = useState("")
  const [region, setRegion] = useState("")
  const [data, status] = useFetch(`https://restcountries.com/v3.1/all`)

  useEffect(() => {
    document.title = "Countries | Geoid"
  }, [])

  function handleChange(e) {
    if (e.target) {
      let value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
      setSearchInput(value)
      return
    }
    setRegion(e.value)
    setSearchInput("")
  }

  const countries = data.map((country, index) => {
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
      {status === "fetched" && <p style={{ textAlign: "center", marginTop: "2rem" }}>Click country for details</p>}

      {
        (() => {
          if (status === "fetching") {
            return <CountryList>
                <CountryListSkeleton />
              </CountryList>
          }
          if (status === "fetched") {
            return <CountryList>
                {countries.every(country => country === undefined) ? <Error result /> : countries}
              </CountryList>
          }
          if (status === "error") {
            return <Error fetch />
          }
        })()
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
  gap: 1rem;

  > * {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .region-filter__control {
    border-color: var(--app-color);
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