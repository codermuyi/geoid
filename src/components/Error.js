import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "./Button"

const Error = ({ page, fetch }) => {

  return (
    <div className="page">
      <ErrorDisplay>
        {page && <>
          <p>404. Page not found.</p>
          <Button pad={1} as={Link} to="/" fontSize={1}>
            Go back to home page
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
  font-size: 2rem;

  p {
    margin-inline: auto;
    max-width: 800px;
  }
`

export default Error