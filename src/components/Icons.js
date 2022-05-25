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
