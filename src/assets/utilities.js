import Loader from "../components/Loader"
import Error from "../components/Error"

export function displayFetchResults(status, result) {
  switch (status) {
    case "error":
      return <Error fetch />
    case "fetching":
      return <Loader />
    case "fetched":
      return result
    default:
      return <Loader />
  }
}

