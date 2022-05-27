import { useEffect, useRef, useReducer } from "react"

const initialState = {
  status: "idle",
  error: null,
  data: []
}

function reducer(state, action) {
  switch (action.type) {
    case "FETCHING":
      return { ...initialState, status: "fetching" }
    case "FETCHED":
      return { ...initialState, status: "fetched", data: action.payload }
    case "ERROR":
      return { ...initialState, status: "error", error: action.payload }
    default:
      return state
  }
}

const useFetch = (url, options = {}) => {
  const cache = useRef({})
  const optRef = useRef({})
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    optRef.current = options
  }, [options])

  useEffect(() => {
    let abort = false
    if (!url) return

    const fetchData = async () => {
      dispatch({ type: "FETCHING" })
      if (cache.current[url]) {
        const data = cache.current[url]
        dispatch({ type: "FETCHED", payload: data })
        // console.log("cached")
      } else {
        try {
          const response = await fetch(url, optRef.current)
          const data = await response.json()
          // console.log(data)
          cache.current[url] = data
          if (abort) return
          dispatch({ type: "FETCHED", payload: data })
          // console.log("fetched")
        } catch (err) {
          if (abort) return
          dispatch({ type: "ERROR", payload: err.message })
        }
      }
    }
    fetchData()

    return () => {
      abort = true
    }
  }, [url])

  return [state.data, state.status]
}

export default useFetch