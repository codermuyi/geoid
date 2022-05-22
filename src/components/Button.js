import styled from "styled-components/macro"

const Button = ({ children, size, pad, fontSize, as, to, round }) => {
  return (
    <Btn
      size={size}
      pad={pad}
      fontSize={fontSize}
      as={as || "button"}
      to={to}
      round={round}
    >
      {children}
    </Btn>
  )
}

const Btn = styled.button`
  display: inline-flex;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0 .1em .2em rgba(0, 0, 0, .1);
  margin: .4em;
  border: 0;
  width: ${props => props.size}rem;
  padding: ${props => `calc(${props.pad / 2}rem) ${props.pad}rem`};
  font-size: ${props => props.fontSize}rem;
  border-radius: ${props => props.round && "50%"};

  :hover {
    background-color: rgba(0, 187, 119, .2);
  }
`

export default Button