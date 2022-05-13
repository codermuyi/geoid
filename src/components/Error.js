import styled from "styled-components"
import { Link } from "react-router-dom"

const Error = ({ page, fetch }) => {

  return (
    <div className="page">
      <ErrorDisplay>
        {page && <>
          <p>404. Page not found.</p>
          <Link to="/">Go back to home page</Link>
        </>}
        {fetch && <p>Could not load. Please check your data connection or refresh the page.</p>}
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