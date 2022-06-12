/* eslint-disable array-callback-return */
import { useState, useEffect, useRef } from "react"
import styled from "styled-components/macro"
import { mid2 } from "../assets/breakpoints"
import useFetch from "../assets/hooks/useFetch"
import CountryCard from "../components/country/CountryCard"
import ScrollToTop from "../components/ScrollToTop"
import Error from "../components/common/Error"
import { CountryListSkeleton } from "../components/CustomSkeleton"
import Filter from "../components/country/Filter"
import usePageTitle from "../assets/hooks/usePageTitle"
import { displayFetchResults } from "../assets/utilities"

const Countries = () => {
  const [searchInput, setSearchInput] = useState("")
  const [region, setRegion] = useState("")
  const [data, status] = useFetch(`https://restcountries.com/v3.1/all`)
  const searchElement = useRef({})
  usePageTitle("Countries of the Earth - Geoid")

  useEffect(() => {
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
    const countryCard = <CountryCard key={index} {...country} />
    const nameList = Object.values(country.name)
    const searchValue = searchInput.trim().toLowerCase()
    const altSpelling = country.altSpellings.map(spelling => spelling.toLowerCase())
    const isAltSpelling = altSpelling.includes(searchValue)

    if (searchValue) {
      if (isAltSpelling || nameList.includes(searchInput.trim()) || nameList.join("").toLowerCase().includes(searchValue)) {
        return countryCard
      }
    } else {
      if (!region) {
        return countryCard
      } else if (country.region.toLowerCase() === region) {
        return countryCard
      }
    }
  })

  return (
    <div className="page">
      <Filter
        searchInput={searchInput}
        searchElement={searchElement}
        handleChange={handleChange}
      />
      {
        status === "fetched" && <p style={{ textAlign: "center", marginTop: "2rem" }}>Click country for details</p>
      }
      {
        displayFetchResults({
          "fetching": <CountryList>
            <CountryListSkeleton />
          </CountryList>,
          "fetched": <CountryList>
            {countries.every(country => country === undefined) ? <Error result /> : countries}
          </CountryList>,
          "error": <Error fetch />
        }, status)
      }
      <ScrollToTop />
    </div>
  )
}

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