import styled from "styled-components/macro"

const About = () => {
  return (
    <div className="page">
      <Article>
        <h1>About Geoid</h1>
        <p>This project was inspired by two Frontend Mentor challenges: </p>
        <ul>
          <li><a href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub/rest-countries-api-with-color-theme-switcher-B1kp8_d4c">REST Countries API with color theme switcher</a></li>
          <li><a href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub/ip-address-tracker-HksPvddN5">IP Address Tracker</a></li>
        </ul>
      </Article>
    </div>
  )
}

const Article = styled.article`
  background: white;
  max-width: 60ch;
  margin-inline: auto;
  padding: 3rem;
`

export default About