import styled from "styled-components/macro"
import { SunIcon, MoonIcon } from "../Icons"
import useMatchMedia from "../../assets/hooks/useMatchMedia"
import useTheme from "../../assets/theme"

const Toggle = () => {
  const isMatched = useMatchMedia("min", "350px")
  const theme = useTheme()

  function handleThemeToggle(e) {
    theme.setDarkMode(e.target.checked)
  }

  return (
    <Toggler>
      {isMatched && <SunIcon />}
      <label aria-label="Theme toggle">
        <Checkbox
          checked={theme.isDarkMode}
          onChange={handleThemeToggle}
        />
      </label>
      {isMatched && <MoonIcon />}
    </Toggler>
  )
}

const Toggler = styled.div`
  margin-left: 3rem;
  --height: 30px;
  --width: 60px;
  display: flex;
  align-items: center;
  gap: .1rem;

  label {
    border-radius: 6rem;
    width: var(--width);
    display: block;
    margin: 0 auto;
    margin-right: .4rem;
  }
`

const Checkbox = styled.input.attrs(props => ({
  type: "checkbox",
}))`
  appearance: none;
  position: relative;
  display: block;
  width: var(--width);
  height: var(--height);
  border-radius: inherit;
  background-color: var(--light-green);
  
  :before {
    content: "";
    position: absolute;
    left: -.2em;
    width: calc(var(--width) / 2);
    height: var(--height);
    background-color: var(--app-color);
    border-radius: 50%;
    transition-duration: .2s;
  }

  :checked:before {
    left: calc(var(--width) / 2);
  }
`

export default Toggle