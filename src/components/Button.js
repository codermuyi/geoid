import styled from "styled-components"

const Button = ({children, size}) => {
  return (
    <Btn size={size}>
      {children}
    </Btn>
  )
}

const Btn = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0 .1em .2em rgba(0, 0, 0, .1);
  margin: .4em;
  border: 0;

  a {
    display: block;
    padding: ${props => `calc(${props.size/2}rem) ${props.size}rem`};
  }
`

export default Button