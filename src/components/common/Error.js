import styled, { css } from "styled-components/macro"
import { Link } from "react-router-dom"
import Button from "./Button"

const Error = ({ page, fetch, result }) => {

  return (
    <ErrorDisplay page={page}>
      {page && <>
        <p>404. Page not found.</p>
        <Button pad={1} as={Link} to="/" fontSize={1}>
          Go back to home page
        </Button>
      </>}
      {fetch && <p>Could not load. Please check your data connection and refresh the page.</p>}
      {result && <p>No results found.</p>}
    </ErrorDisplay>
  )
}

const ErrorDisplay = styled.div`
  padding: 10rem 1rem;
  text-align: center;
  font-size: 2rem;
  background-color: hsl(0, 0%, 98%);

  ${props => props.page && css`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

  p {
    margin-inline: auto;
    max-width: 800px;
  }
`

export default Error