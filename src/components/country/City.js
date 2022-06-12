import useFetch from "../../assets/hooks/useFetch"
import Button from "../common/Button"
import Skeleton from "../CustomSkeleton"

const Cities = ({ city }) => {
  const [cityInfo, cityInfoStatus] = useFetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`)

  return (
    (() => {
      if (cityInfoStatus === "fetched") {
        return <Button as="a" href={cityInfo.content_urls?.desktop.page} padY={.5} padX={1} fontSize={.8}>{city}</Button>
      }
      if (cityInfoStatus === "fetching") {
        return <Button noShadow pad={0} bgColor="blue">
          <Skeleton width={100} height={35} />
        </Button>
      }
      if (cityInfoStatus === "error++") {
        return <Button padY={.5} padX={1} fontSize={.8} disabled>{city}</Button>
      }
    })()
  )
}

export default Cities