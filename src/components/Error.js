import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "./Button"

const Error = ({ page, fetch }) => {

  return (
    <div className="page">
      <ErrorDisplay>
        {page && <>
          <p>404. Page not found.</p>
          <Button pad={1}>
            <Link to="/">Go back to home page</Link>
          </Button>
        </>}
        {fetch && <p>Could not load. Please check your data connection and refresh the page.</p>}
      </ErrorDisplay>
    </div>
  )
}

const ErrorDisplay = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 2.5rem;

  p {
    margin-inline: auto;
    max-width: 1000px;
  }
`

export default Error