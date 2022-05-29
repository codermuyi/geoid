/* eslint-disable array-callback-return */
import { useState, useEffect, useRef } from "react"
import styled from "styled-components/macro"
import Select from "react-select"
import { mid2 } from "../assets/breakpoints"
import searchIconUrl from "../assets/images/search.svg"
import useFetch from "../assets/hooks/useFetch"
import CountryCard from "../components/country/CountryCard"
import ScrollToTop from "../components/ScrollToTop"
import Error from "../components/common/Error"
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
  const searchElement = useRef({})

  useEffect(() => {
    document.title = "Countries | Geoid"
    let listener = window.addEventListener("keydown", e => {
      if (e.keyCode === 13 && searchElement.current === document.activeElement) {
        window.scrollTo(0, 230)
        searchElement.current.blur()
      }
    })
    return () => window.removeEventListener("keydown", listener)
  }, [])

  function handleChange(e) {
    if (e.target) {
      let value = e.target.value
      setSearchInput(value)
      return
    }
    setRegion(e.value)
    setSearchInput("")
  }

  const countries = data.map((country, index) => {
    const comp = <CountryCard key={index} {...country} />
    const nameList = Object.values(country.name)
    const search = searchInput.trim().toLowerCase()
    const altSpelling = country.altSpellings.map(spelling => spelling.toLowerCase())
    const isAltSpelling = altSpelling.includes(search)
    
    if (search) {
      if (isAltSpelling || nameList.includes(searchInput.trim()) || nameList.join("").toLowerCase().includes(search)) {
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
            ref={searchElement}
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
    box-shadow: none;
  }

  .region-filter__control:hover {
    border-color: transparent;
  }
  
  .region-filter__menu-list {
    z-index: 100;
    padding: .1em 1em;
    color: black;
  }

  .region-filter__option:hover:not(.region-filter__option--is-selected),
  .region-filter__option--is-focused {
    background-color: var(--light-green);
  }

  .region-filter__option--is-selected {
    background-color: var(--app-color);
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