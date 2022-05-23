import styled from "styled-components/macro"

const S = {}

const Footer = () => {
  return (
    <S.Footer>
      <a className="link" href="https://www.flaticon.com/free-icons/world" title="world icons">World icons created by srip - Flaticon</a>
      <p>App created by <a className="link" href="https://samuel-adepoju.vercel.app">Samuel Adepoju</a></p>
    </S.Footer>
  )
}

S.Footer = styled.footer`
  text-align: center;
  padding-block: 6em;
  color: var(--app-color);
  position: relative;

  a:link {
    color: black !important;
  }
  & > * {
    position: relative;
    z-index: 2;
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    width: 200px;
    /* background-color: var(--app-color); */
    background-color: var(--light-green);
    z-index: 1;
  }
  ::before {
    left: 0;
    clip-path: polygon(0 100%, 100% 100%, 49% 84%, 62% 60%, 36% 48%, 50% 25%, 20% 0%, 0 0);
  }
  ::after {
    right: 0;
    clip-path: polygon(50% 25%, 80% 0%, 100% 0, 100% 100%, 0 100%, 51% 84%, 38% 60%, 64% 48%);
  }
`;

export default Footer