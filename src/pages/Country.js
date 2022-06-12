import { useParams, Link } from "react-router-dom"
import useFetch from "../assets/hooks/useFetch"
import { ReactComponent as Back } from "../assets/images/left-arrow.svg"
import CountryInfo from "../components/country/CountryInfo"
import Button from "../components/common/Button"
import Error from "../components/common/Error"
import { CountryInfoSkeleton } from "../components/CustomSkeleton"
import { formatName } from "../assets/utilities"
import usePageTitle from "../assets/hooks/usePageTitle"
import { displayFetchResults } from "../assets/utilities"

const Country = () => {
  const { countryName } = useParams()
  const [countryData, countryDataStatus] = useFetch(`https://restcountries.com/v3.1/name/${formatName(countryName)}?fullText=true`)
  usePageTitle(formatName(countryName))

  return (
    <div className="page">
      <br />
      <Button size={2.7} pad={0.2} as={Link} to="/countries" name="Back to countries page">
        <Back />
      </Button>
      {
        displayFetchResults({
          "fetching": <CountryInfoSkeleton />,
          "fetched": <CountryInfo
            country={formatName(countryName)}
            data={countryData[0]}
          />,
          "error": <Error fetch />,
          "error++": <Error page />
        }, countryDataStatus)
      }
    </div>
  )
}

export default Country