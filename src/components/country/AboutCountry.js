import styled from "styled-components/macro"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import useFetch from "../../assets/hooks/useFetch"
import { lg1, lg2 } from "../../assets/breakpoints"
import Button from "../common/Button"

const AboutCountry = ({ country }) => {
  const [wikiInfo, wikiInfoStatus] = useFetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${country}`)
  
  return (
    <About>
      {
        (() => {
          if (wikiInfoStatus === "fetched") {
            return <>
              <div dangerouslySetInnerHTML={{ __html: wikiInfo.extract_html }}></div>
              <Button as="a" href={wikiInfo.content_urls?.desktop.page} pad="1">Go to Wikipedia</Button>
            </>
          }
          if (wikiInfoStatus === "fetching") {
            return <div><Skeleton height={15} width={1000} count={9} style={{paddingInline: "1rem"}}/></div>
          }
        })()
      }
    </About>
  )
}

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  width: 100%;
  max-width: 72ch;
  margin: 0 auto 1.5rem;
  padding: 0.5rem 1rem;
  color: #555555;
  text-align: center;
  overflow-x: hidden;
  border-radius: 1rem;
  background-color: var(--app-color-2);
  margin-top: 3rem;

  @media (min-width: ${lg1}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${lg2}) {
    grid-column: 1 / 2;
    margin-top: 5rem;
  }
`

export default AboutCountry