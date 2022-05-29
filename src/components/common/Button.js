import styled from "styled-components"

const Button = props => {
  const { 
    children,
    size,
    pad,
    padX,
    padY,
    fontSize,
    as,
    to,
    round,
    noShadow,
    bgColor,
    onClick,
    href,
    name
  } = props

  return (
    <Btn
      as={as || "button"}
      to={to}
      href={href}
      onClick={onClick}
      aria-label={name}
      $pad={pad}
      $padX={padX}
      $padY={padY}
      $size={size}
      $round={round}
      $fontSize={fontSize}
      $noShadow={noShadow}
      $bgColor={bgColor}
    >
      {children}
    </Btn>
  )
}

const Btn = styled.button`
  display: inline-flex;
  cursor: pointer;
  background-color: ${props => props.bgColor ? props.bgColor : "var(--app-color-2)"};
  margin: .4em;
  border: 0;
  box-shadow: ${props => !props.$noShadow && "0 .1em .2em rgba(0, 0, 0, .1)"};
  width: ${props => props.$size ? `${props.$size}rem` : ""};
  padding: ${props => props.$pad && `${props.$pad}rem`};
  padding-inline: ${props => props.$padX && `${props.$padX}rem`};
  padding-block: ${props => props.$padY && `${props.$padY}rem`};
  font-size: ${props => props.$fontSize ? `${props.$fontSize}rem` : "inherit"};
  border-radius: ${props => props.$round && "50%"};
  transition-duration: .2s;
  text-align: center;
  color: var(--text-color-1);

  :hover {
    background-color: var(--light-green);
  }

  :active {
    box-shadow: inset 0 .1em .2em rgba(0, 0, 0, .1);
  }
`

export default Button