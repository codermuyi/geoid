import styled from "styled-components"
import { Link } from "react-router-dom"

const Error = ({ message }) => {

  return (
    <div className="page">
      <ErrorDisplay>
        <p>{message}</p>
        {message.includes("404") && <Link to="/">Go back to home page</Link>}
      </ErrorDisplay>
    </div>
  )
}

const ErrorDisplay = styled.div`
  padding: 2em;
  text-align: center;
  font-size: 2.5em;

  p {
    margin-inline: auto;
    max-width: 1000px;
  }

  a {
    font-size: .4em;
    background-color: #ffffff;
    padding: .4em;
    box-shadow: 0 0 .2em rgba(0, 0, 0, .1)
  }
`

export default Error