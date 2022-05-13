import { useParams } from "react-router-dom"

const Country = () => {
  const { country } = useParams()

  return (
    <div style={{padding: "5em"}}>
      Hello, {country}
    </div>
  )
}

export default Country