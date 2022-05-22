import styled from "styled-components"
import useScroll from "../assets/useScroll"

import { ReactComponent as Arrow } from "../assets/images/up-arrow.svg"

const ScrollToTop = () => {
  const scrollTop = useScroll()

  function scrollToTop(e) {
    window.scrollTo(0, 0)
  }

  return (
    <ScrollToTopButton
      top={scrollTop} 
      onClick={scrollToTop}
    >
      <Arrow />
    </ScrollToTopButton>
  )
}

const ScrollToTopButton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: ${props => props.top > 900 ? "2em" : "-10em"};
  transition-duration: .2s;
  width: 4rem;
  border: 0;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 .3rem .4rem rgba(0, 0, 0, .15);
  
  & > * {
    transition-duration: inherit;
  }
  :hover > * {
    transform: translateY(-40%)
  }
`

export default ScrollToTop