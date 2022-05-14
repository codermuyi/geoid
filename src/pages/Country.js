import { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams, Link } from "react-router-dom"
import Loader from "../components/Loader"

const Country = () => {
  console.log(useParams())
  const { country } = useParams()
  const [countryData, setCountryData] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then(res => res.json())
      .then(data => {
        setCountryData(data[0])
        setHasLoaded(true)
      })
  }, [country])

  return (
    <div className="page">
      <Link to="/countries">Back</Link>
      {
        hasLoaded ?
          <Content>
            <Col>
              <img src={countryData.flags.png} alt="" />
            </Col>
            <Col>
              <h2>{countryData.name.official}</h2>
            </Col>
          </Content> :
          <Loader />
      }
    </div>
  )
}

const Content = styled.div``

const Col = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: max-content;
    max-height: max-content;
    margin-inline: auto;
  }
`

export default Country