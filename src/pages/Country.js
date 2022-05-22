import { useParams, Link } from "react-router-dom"
import useFetch from "../assets/useFetch"
import { ReactComponent as Back } from "../assets/images/left-arrow.svg"
import CountryInfo from "../components/CountryInfo"
import Button from "../components/Button"
import Error from "../components/Error"
import { CountryInfoSkeleton } from "../components/CustomSkeleton"

const Country = () => {
  const { country } = useParams()
  const [data, status] = useFetch(`https://restcountries.com/v3.1/name/${country}`)

  return (
    <div className="page">
      <br />
      <Button size={2.7} pad={0.2} as={Link} to="/countries">
        <Back />
      </Button>
      {
        (() => {
          if (status === "fetching") {
            return <CountryInfoSkeleton />
          }
          if (status === "fetched") {
            return <CountryInfo
              country={country}
              data={data[0]}
            />
          }
          if (status === "error") {
            return <Error fetch />
          }
        })()
      }
    </div>
  )
}

export default Country