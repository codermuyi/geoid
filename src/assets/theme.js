import { useContext } from "react"
import { ThemeContext} from "../App"

function useTheme() {
  return useContext(ThemeContext)
}

export default useTheme