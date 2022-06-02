import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import useFetch from "../assets/hooks/useFetch"
import { ReactComponent as Back } from "../assets/images/left-arrow.svg"
import CountryInfo from "../components/country/CountryInfo"
import Button from "../components/common/Button"
import Error from "../components/common/Error"
import { CountryInfoSkeleton } from "../components/CustomSkeleton"
import { formatName } from "../assets/utilities"

const Country = () => {
  const { countryName } = useParams()
  const [countryData, countryDataStatus] = useFetch(`https://restcountries.com/v3.1/name/${formatName(countryName)}?fullText=true`)
  
  console.log(countryName)

  useEffect(() => {
    document.title = `${formatName(countryName)} | Geoid`
  }, [countryName])

  return (
    <div className="page">
      <br />
      <Button size={2.7} pad={0.2} as={Link} to="/countries" name="Back to countries page">
        <Back />
      </Button>
      {
        (() => {
          if (countryDataStatus === "fetching") {
            return <CountryInfoSkeleton />
          }
          if (countryDataStatus === "fetched") {
            return <CountryInfo
              country={formatName(countryName)}
              data={countryData[0]}
            />
          }
          if (countryDataStatus === "error") {
            return <Error fetch />
          }
        })()
      }
    </div>
  )
}

export default Country