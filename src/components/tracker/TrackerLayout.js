import styled from "styled-components/macro"
import { lg1, lg2 } from "../../assets/breakpoints"

const S = {}

S.StyledTracker = styled.div`
--gap: 250px;
--info-bottom: -180%;
display: grid;
gap: ${props => props.isInputEmpty ? "1rem" : "var(--gap)"};
width: 100%;
font-size: 2rem;
text-align: center;
background-color: var(--app-color-3);
margin-bottom: 3rem;

@media (min-width: ${lg1}) {
  --gap: 4rem;
  --info-bottom: -100%;
}
`

S.Row = styled.div`
position: relative;

h3 {
  margin-block: 1rem 0;
}
`

S.Search = styled.div`
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
width: 100%;
max-width: 40rem;
padding: 0;
margin: 1rem auto;
display: flex;

input {
  padding: 1rem;
  display: block;
  width: 100%;
  border: 0;
}

button {
  background-color: var(--app-color);
  color: white;
  display: flex;
  align-items: center;
  max-width: 60px;
  margin: 0;

  :focus {
    background-color: var(--light-app-color);
  }
}
`

S.Info = styled.div`
background-color: var(--app-color-2);
padding: 1rem;
border-radius: 2rem;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
position: absolute;
bottom: var(--info-bottom);
left: 0;
right: 0;
z-index: 900;
display: flex;
flex-direction: column;
gap: 1rem;
font-size: 1rem;
transition-duration: .2s;
transform: scale(${props => props.isInputEmpty ? "0" : "1"});
left: 10%;
right: 10%;

@media (min-width: ${lg1}) {
  & {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    padding-block: 2rem;
  }

  & > div:not(:last-child) {
    border-right: 2px solid #dddddd;
    padding-right: 4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0;
  }
}

@media (min-width: ${lg2}) {
  font-size: 1.1rem;
}

& > div {
  p {
    margin: 0;
  }

  .key {
    text-transform: uppercase;
    font-size: .7em;
    color: var(--text-color-2);
    font-weight: 600;
  }

  .value {
    font-weight: 800;
    font-size: 1.2em;
  }
}
`

export default S