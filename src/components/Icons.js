import styled from "styled-components"

export const MenuIcon = styled.i`
 transform: scale(var(--ggs,1));

  &,
  &::after,
  &::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 3px;
  background: currentColor
  }

  &::after,
  &::before {
  content: "";
  position: absolute;
  top: -6px;
  right: 0;
  width: 10px
  }

  &::after {
  top: 6px;
  width: 14px
  } 
`

 export const CloseIcon = styled.i`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs,1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;

  &::after,
  &::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
  border-radius: 5px;
  top: 8px;
  left: 1px
  }

  &::after {
  transform: rotate(-45deg)
  } 
`

export const SunIcon = styled.i`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  background:
  linear-gradient(to bottom,
  currentColor 4px,transparent 0)
  no-repeat 5px -6px/2px 6px,
  linear-gradient(to bottom,
  currentColor 4px,transparent 0)
  no-repeat 5px 14px/2px 6px,
  linear-gradient(to bottom,
  currentColor 4px,transparent 0)
  no-repeat -8px 5px/6px 2px,
  linear-gradient(to bottom,
  currentColor 4px,transparent 0)
  no-repeat 14px 5px/6px 2px;
  border-radius: 100px;
  box-shadow: inset 0 0 0 2px;
  border: 6px solid transparent;

  ::after,
  ::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px;
  }

  ::before {
    transform: rotate(-45deg)
  }

  ::after {
    transform: rotate(45deg)
  } 
`

export const MoonIcon = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    border-radius: 50%;
  }
  & {
    overflow: hidden;
    position: relative;
    transform: rotate(-135deg) scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-bottom-color: transparent;
  }
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 18px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    top: 8px;
    left: 2px;
  }
`