import styled from "styled-components"

const Button = ({children, size, pad}) => {
  return (
    <Btn size={size} pad={pad}>
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

  :hover {
    background-color: rgba(0, 187, 119, .2);
  }
  
  a {
    display: block;
    width: ${props => props.size+"rem"};
    padding: ${props => `calc(${props.pad/2}rem) ${props.pad}rem`};
  }
`

export default Button