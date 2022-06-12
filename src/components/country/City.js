import useFetch from "../../assets/hooks/useFetch"
import Button from "../common/Button"
import Skeleton from "../CustomSkeleton"
import { displayFetchResults } from "../../assets/utilities"

const Cities = ({ city }) => {
  const [cityInfo, cityInfoStatus] = useFetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`)

  return displayFetchResults({
    "fetching": <Button noShadow pad={0} bgColor="blue">
      <Skeleton width={100} height={35} />
    </Button>,
    "fetched": <Button as="a" href={cityInfo.content_urls?.desktop.page} padY={.5} padX={1} fontSize={.8}>
      {city}
    </Button>,
    "error++": <Button padY={.5} padX={1} fontSize={.8} disabled>{city}</Button>
  }, cityInfoStatus)
}

export default Cities