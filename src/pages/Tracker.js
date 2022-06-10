import { useReducer } from "react"
import styled from "styled-components/macro"
import TrackerMap from "../components/TrackerMap"
import Button from "../components/common/Button"
import usePageTitle from "../assets/hooks/usePageTitle"
import useFetch from "../assets/hooks/useFetch"
import { lg1, lg2 } from "../assets/breakpoints"
import Skeleton from "../components/CustomSkeleton"

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
        searchInput: state.searchInput
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
  const [data2, status2] = useFetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${data.location && data.location.region}&accept-language=en&polygon_threshold=0.0`, options2)

  console.log(data)

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
          {/* <TrackerMap /> */}
        </Row>
      </StyledTracker>
    </div>
  )
}

const StyledTracker = styled.div`
  --gap: 250px;
  --info-bottom: -180%;
  display: grid;
  gap: ${props => props.isInputEmpty ? "1rem" : "var(--gap)"};
  width: 100%;
  font-size: 2rem;
  text-align: center;
  background-color: var(--app-color-3);
  margin-bottom: 3rem;

  @media (min-width: ${lg1}) {
    --gap: 4rem;
    --info-bottom: -100%;
  }
`

const Row = styled.div`
  position: relative;

  h3 {
    margin-block: 1rem 0;
  }
`

const Search = styled.div`
  /* border: 1px solid var(--light-green); */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 40rem;
  padding: 0;
  margin: 1rem auto;
  display: flex;

  input {
    padding: 1rem;
    display: block;
    width: 100%;
    border: 0;
  }

  button {
    background-color: var(--app-color);
    color: white;
    display: flex;
    align-items: center;
    max-width: 60px;
    margin: 0;

    :focus {
      background-color: var(--light-green);
    }
  }
`

const Info = styled.div`
  background-color: var(--app-color-2);
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: absolute;
  bottom: var(--info-bottom);
  left: 0;
  right: 0;
  z-index: 900;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  transition-duration: .2s;
  transform: scale(${props => props.isInputEmpty ? "0" : "1"});
  left: 10%;
  right: 10%;

  @media (min-width: ${lg1}) {
    & {
      flex-direction: row;
      gap: 2rem;
      justify-content: center;
      padding-block: 2rem;
    }

    & > div:not(:last-child) {
      border-right: 2px solid #dddddd;
      padding-right: 4rem;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin: 0;
    }
  }

  @media (min-width: ${lg2}) {
    font-size: 1.1rem;
  }

  & > div {
    p {
      margin: 0;
    }

    .key {
      text-transform: uppercase;
      font-size: .7em;
      color: var(--text-color-2);
      font-weight: 600;
    }

    .value {
      font-weight: 800;
      font-size: 1.2em;
    }
  }
`

export default Tracker