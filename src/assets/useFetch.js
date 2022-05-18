import { useState, useEffect, useRef } from "react"

const useFetch = (url, options = {}) => {
  const cache = useRef({})
  const [status, setStatus] = useState("idle")
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return
    setStatus("fetching")

    if (cache.current[url]) {
      setData(cache.current[url])
      setStatus("fetched")
    } else {
      fetch(url, options)
        .then(res => {
          return res.json()
        })
        .then(dataObj => {
          cache.current[url] = dataObj
          setData(dataObj)
          setStatus("fetched")
        }, err => {
            setStatus("error")
        })
    }
  }, [url, options])

  return { data, status, setStatus }
}

export default useFetch