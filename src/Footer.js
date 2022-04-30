import styled from "styled-components"

const S = {}

const Footer = () => {
  return (
    <S.Footer>
      <a href="https://www.flaticon.com/free-icons/world" title="world icons">World icons created by srip - Flaticon</a>
    </S.Footer>
  )
}

S.Footer = styled.footer`
  text-align: center;

  a {
    text-decoration: none;
    color: pink;
  }
`;

export default Footer