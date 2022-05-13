import { useParams } from "react-router-dom"

const Country = () => {
  const { country } = useParams()

  return (
    <div className="page">
      Hello, {country}
    </div>
  )
}

export default Country