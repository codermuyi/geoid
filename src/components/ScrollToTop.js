import styled from "styled-components/macro"
import useScroll from "../assets/useScroll"

import { ReactComponent as Arrow } from "../assets/images/up-arrow.svg"

const ScrollToTop = () => {
  const scrollTop = useScroll()

  function scrollToTop(e) {
    window.scrollTo(0, 0)
  }

  return (
    <Button top={scrollTop} onClick={scrollToTop}>
      <Arrow />
    </Button>
  )
}

const Button = styled.button`
  position: fixed;
  bottom: 2em;
  border-color: var(--app-green);
  width: 4em;
  background-color: transparent;
  right: ${props => props.top > 900 ? "2em" : "-10em"};
  transition-duration: .2s;
`

export default ScrollToTop