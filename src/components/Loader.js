import styled from "styled-components/macro"

const Loader = () => {
  return (
    <StyledLoader>
      <LoaderCircle />
    </StyledLoader>
  )
}

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5em;
  width: 100vw;
  height: 100vh;
`

const LoaderCircle = styled.div`
  border-radius: 50%;
  border: 1em solid transparent;
  border-top: 1em solid var(--app-green);
  border-bottom: 1em solid var(--app-green);
  padding: 6em;
  position: relative;
  overflow: hidden;
  animation: rotate .8s linear infinite;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    padding-bottom: 2em;
    transform: translateX(-50%);
    border: 5em solid transparent;
    border-top-color: var(--app-green);
    border-bottom-color: var(--app-green);
  }

  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }
`

export default Loader