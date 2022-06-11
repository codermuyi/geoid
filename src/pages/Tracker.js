import { useReducer, useEffect, useRef } from "react"
import styled from "styled-components"
import TrackerMap from "../components/tracker/TrackerMap"
import Layout from "../components/tracker/TrackerLayout"
// import { StyledTracker, Row, Search, Info } from "../components/tracker/TrackerLayout"
import Button from "../components/common/Button"
import Skeleton from "../components/CustomSkeleton"
import usePageTitle from "../assets/hooks/usePageTitle"
import useFetch from "../assets/hooks/useFetch"

const { 
  StyledTracker, 
  Row, 
  Search, 
  Info 
} = Layout

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
};

const options2 = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
};

const initialState = {
  searchInput: "",
  completeSearch: "",
}

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return { ...initialState, searchInput: action.payload }
    case "SEARCH_IP":
      return {
        ...initialState,
        completeSearch: action.payload,
        // searchInput: state.searchInput
      }
    default:
      return state
  }
}

const Tracker = () => {
  usePageTitle("IP Address Tracker")
  const [state, dispatch] = useReducer(reducer, initialState)
  const [data, IPStatus] = useFetch(`https://geo.ipify.org/api/v2/country?apiKey=at_1qY0VaVYm5K0gHb9IBpw1qphkWsXh&domain=${state.completeSearch}`)
  // const [data2, status2] = useFetch(`https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?${state.completeSearch ? `ip=${state.completeSearch}&` : ""}apikey=873dbe322aea47f89dcf729dcc8f60e8`, options)
  const [data2, status2] = useFetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${IPStatus === "fetched" ? `${data.location.region}, ${data.location.country}` : "Nigeria"}&accept-language=en&polygon_threshold=0.0`, options2)

  const bigRef = useRef({})
  useEffect(() => {
    // if (state.completeSearch) {
    //   bigRef.current = state.completeSearch === ""
    // } else {
    //   bigRef.current = false
    // }
    dispatch({ type: "SEARCH_IP", payload: IPStatus === "fetched" ? data.ip : ""})
  }, [IPStatus])

  // console.log(data)

  const isInputEmpty = state.completeSearch === ""
  
  const handleChange = e => dispatch({ type: "UPDATE_INPUT", payload: e.target.value })
  const trackIP = () => dispatch({ type: "SEARCH_IP", payload: state.searchInput })

  function checkValue(value, addFront = "", addBack = "") {
    if (IPStatus === "fetched") {
      if (value) {
        return `${addFront}${value}${addBack}`
      } else {
        return "Not Found"
      }
    } else if (IPStatus === "fetching") {
      return <Skeleton height={20} width={120} />
    } else {
      return "Not Loading"
    }
  }
  // 192.212.174.101
  return (
    <div className="page">
      <StyledTracker isInputEmpty={isInputEmpty}>
        <Row>
          <h3>IP Address Tracker</h3>
          <Search>
            <input
              type="search"
              placeholder="Search for any IP address or domain"
              value={state.searchInput}
              onChange={handleChange}
            />
            <Button onClick={trackIP}>GO</Button>
          </Search>
          <Info isInputEmpty={isInputEmpty}>
            <div>
              <p className="key">IP Address</p>
              <p className="value">{checkValue(data.ip)}</p>
            </div>
            <div>
              <p className="key">Location</p>
              <p className="value">{checkValue(data.location?.country, `${data.location?.region}, `)}</p>
            </div>
            <div>
              <p className="key">Time zone</p>
              <p className="value">{checkValue(data.location?.timezone, "UTC ")}</p>
            </div>
            <div>
              <p className="key">ISP</p>
              <p className="value">{checkValue(data.isp)}</p>
            </div>
          </Info>
        </Row>
        <Row>
          <TrackerMap data={data2[0]} status={status2} />
        </Row>
      </StyledTracker>
    </div>
  )
}

const DemoTracker = () => {
  usePageTitle("IP Address Tracker")

  return (
    <div className="page">
      <StyledDemoTracker>
        <p>This page is not yet available. Please check back later</p>
      </StyledDemoTracker>
    </div>
  )
}

const StyledDemoTracker = styled.div`
  font-size: 2em;
  padding-block: 10em;
  text-align: center;
  background-color: var(--app-color-3);
`

export default DemoTracker