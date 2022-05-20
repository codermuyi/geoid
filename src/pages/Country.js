import { useParams, Link } from "react-router-dom"
import useFetch from "../assets/useFetch"
import { ReactComponent as Back } from "../assets/images/left-arrow.svg"
import CountryInfo from "../components/CountryInfo"
import Button from "../components/Button"
import { displayFetchResults } from "../assets/utilities"

const Country = () => {
  const { country } = useParams()
  const [data, status] = useFetch(`https://restcountries.com/v3.1/name/${country}`)

  return (
    <div className="page">
      <br />
      <Button size={2.5}>
        <Link to="/countries"><Back /></Link>
      </Button>
      {
        displayFetchResults(status,
          <CountryInfo
            country={country} 
            data={data[0]}
          />)
      }
    </div>
  )
}

export default Country