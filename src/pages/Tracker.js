import { useReducer, useRef} from "react"
import TrackerMap from "../components/tracker/TrackerMap"
import Layout from "../components/tracker/TrackerLayout"
import Button from "../components/common/Button"
import Skeleton from "../components/CustomSkeleton"
import usePageTitle from "../assets/hooks/usePageTitle"
import useFetch from "../assets/hooks/useFetch"
import { displayFetchResults } from "../assets/utilities"

const {
  StyledTracker,
  Row,
  Search,
  Info
} = Layout

const initialState = {
  searchInput: "",
  completeSearch: "",
  hideInfo: false
}

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...initialState,
        searchInput: action.payload,
        hideInfo: true
      }
    case "SEARCH_IP":
      return {
        ...initialState,
        completeSearch: action.payload,
        hideInfo: false,
        searchInput: state.searchInput
      }
    default:
      return state
  }
}

const Tracker = () => {
  usePageTitle("IP Address Tracker")
  const [state, dispatch] = useReducer(reducer, initialState)
  const [data, IPStatus] = useFetch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_IP_API_KEY}&domain=${state.completeSearch}`)
  const searchElement = useRef({})

  const trackIP = () => dispatch({ type: "SEARCH_IP", payload: state.searchInput })

  // useEffect(() => {
  //   let listener = window.addEventListener("keydown", e => {
  //     if (e.keyCode === 13 && searchElement.current === document.activeElement) {
  //       console.log("yasss")
  //       e.preventDefault()
  //       trackIP()
  //       searchElement.current.blur()
  //     }
  //   })
  //   return () => window.removeEventListener("keydown", listener)
  // }, [])

  const handleChange = e => dispatch({ type: "UPDATE_INPUT", payload: e.target.value })

  function checkValue(value, addFront = "", addBack = "") {
    return displayFetchResults({
      "fetched": value ? `${addFront}${value}${addBack}` : "Not Found",
      "fetching": <Skeleton height={20} width={120} />,
      "error": "Not Loading",
      "error++": "Invalid search"
    }, IPStatus)
  }
  // 192.212.174.101
  const location = IPStatus === "fetched" ? `${data.location?.region}, ${data.location?.country}` : "Nigeria"
  return (
    <div className="page">
      <StyledTracker isInfoHidden={state.hideInfo}>
        <Row>
          <h3>IP Address Tracker</h3>
          <Search>
            <input
              ref={searchElement}
              type="search"
              placeholder="Search for any IP address or domain"
              value={state.searchInput}
              onChange={handleChange}
            />
            <Button onClick={trackIP}>GO</Button>
          </Search>
          <Info isInfoHidden={state.hideInfo}>
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
          <TrackerMap location={location} depStatus={IPStatus} />
        </Row>
      </StyledTracker>
    </div>
  )
}

export default Tracker