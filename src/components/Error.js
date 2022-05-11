import styled from "styled-components"

const Error = () => {

  return (
    <ErrorDisplay>
       <p>Could not load. Please check your data connection or refresh the page</p>
    </ErrorDisplay>
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
`

export default Error