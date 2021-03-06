import styled from "styled-components/macro"
import usePageTitle from "../assets/hooks/usePageTitle"
import earthSrc from "../assets/images/world.png"
import { lg1 } from "../assets/breakpoints"

const About = () => {
  usePageTitle("About")

  return (
    <div className="page">
      <Article>
        <img className="earth" src={earthSrc} alt="Earth" />
        <h1>About Geoid</h1>
        <p>This project was inspired by two Frontend Mentor challenges: </p>
        <ul>
          <li><a className="link" href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub/rest-countries-api-with-color-theme-switcher-B1kp8_d4c">REST Countries API with color theme switcher</a></li>
          <li><a className="link" href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub/ip-address-tracker-HksPvddN5">IP Address Tracker</a></li>
        </ul>
        <p>
          I saw a similarity in the two challenges. They both exhibit something about locations. 
          So I combined them, added more features, and made Geoid: an app about Earth and its locations.
        </p>
        <p>
          I plan to extend this app to include as much earthy stuff as possible. If you have any ideas or tips that you don’t mind sharing,
          you can reach me at <a className="link" href="mailto:oluwamuyiwaadepoju@gmail.com">my email address</a>.
        </p>
        <h2>Helpful sources</h2>
        <ul>
          <li>Inspiration from <a className="link" href="https://frontendmentor.io">Frontend Mentor</a></li>
          <li>Icons from <a className="link" href="https://www.flaticon.com/">Flaticon</a>, <a className="link" href="https://svgrepo.com">svgrepo</a> and <a className="link" href="https://css.gg">css.gg</a></li>
          <li>Used <a className="link" href="https://bennettfeely.com/clippy/">Clippy</a> for custom clip-path in footer</li>
          <li>Used <a className="link" href="https://restcountries.com/">REST Countries API</a> to get information about countries</li>
          <li>Used <a className="link" href="https://en.wikipedia.org/api/rest_v1/#/">Wikimedia REST API</a> for country summary and city links</li>
          <li>Used <a className="link" href="https://www.openstreetmap.org/">OpenStreetMap</a> for Tracker map</li>
          <li>Used <a className="link" href="https://stadiamaps.com/">Stadia Maps</a> for country map</li>
          <li>Cities data was generated from <a className="link" href="https://simplemaps.com/data/world-cities">Simple Maps Cities Database</a></li>
        </ul>
      </Article>
    </div>
  )
}

const Article = styled.article`
  background: var(--app-color-2);
  max-width: 60ch;
  margin-inline: auto;
  padding: 3rem 2rem;
  font-size: 1.3rem;
  color: var(--text-color-2);
  position: relative;

  h1 {
    font-size: 3rem;
  }

  .earth {
    width: 100%;
    max-width: 300px;
    margin-bottom: 1rem;
  }

  @media (min-width: ${lg1}) {
    margin-block: 15rem 10rem;
    padding: 5rem 3rem;

    .earth {
      position: absolute;
      top: -200px;
      left: -20%;
    }
  }
`

export default About