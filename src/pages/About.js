import styled from "styled-components/macro"
import earthSrc from "../assets/images/world.png"
import { lg1 } from "../assets/breakpoints"

const About = () => {
  return (
    <div className="page">
      <Article>
        <img className="earth" src={earthSrc} alt="Earth image" />
        <h1>About Geoid</h1>
        <p>This project was inspired by two Frontend Mentor challenges: </p>
        <ul>
          <li><a className="link" href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub/rest-countries-api-with-color-theme-switcher-B1kp8_d4c">REST Countries API with color theme switcher</a></li>
          <li><a className="link" href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub/ip-address-tracker-HksPvddN5">IP Address Tracker</a></li>
        </ul>
        <p>
          I saw a similarity in the two challenges. They both exhibit something about locations. 
          So I combined them and made Geoid: an app about Earth and its locations/places/countries.
        </p>
        <p>
          I plan to extend this app to include as much earthy stuff as possible. If you have any ideas that you don’t mind sharing,
          you can reach me at <a className="link" href="mailto:oluwamuyiwaadepoju@gmail.com">my email address</a>.
        </p>
      </Article>
    </div>
  )
}

const Article = styled.article`
  background: white;
  max-width: 60ch;
  margin-inline: auto;
  padding: 3rem;
  font-size: 1.3rem;
  color: #555555;
  position: relative;

  .earth {
    width: 100%;
    max-width: 300px;
    margin-bottom: 1rem;
  }

  @media (min-width: ${lg1}) {
    margin-block: 15rem 10rem;
    padding-block: 5rem;

    .earth {
      position: absolute;
      top: -200px;
      left: -20%;
    }
  }
`

export default About