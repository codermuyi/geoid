import styled from "styled-components/macro"
import RegionFilter from "react-select"
import searchIconUrl from "../../assets/images/search.svg"
import { mid2 } from "../../assets/breakpoints"

const regionFilterOptions = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
]

const Filter = props => {
  const { searchInput, searchElement, handleChange } = props

  return (
    <CountryFilter>
      <Search>
        <SearchIcon />
        <SearchInput
          value={searchInput}
          onChange={handleChange}
          ref={searchElement}
        />
      </Search>
      <RegionFilter
        options={regionFilterOptions}
        onChange={handleChange}
        placeholder="Filter by region"
        className="region-filter-container"
        classNamePrefix="region-filter"
      />
    </CountryFilter>
  )
}


const CountryFilter = styled.div`
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

export default Filter