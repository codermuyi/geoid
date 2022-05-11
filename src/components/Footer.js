import styled from "styled-components"

const S = {}

const Footer = () => {
  return (
    <S.Footer>
      <a href="https://www.flaticon.com/free-icons/world" title="world icons">World icons created by srip - Flaticon</a>
      <p>App created by Samuel Adepoju</p>
    </S.Footer>
  )
}

S.Footer = styled.footer`
  text-align: center;
  padding-block: 5em;
  color: var(--app-green);
  border-inline: 1em dashed var(--app-green);

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Footer