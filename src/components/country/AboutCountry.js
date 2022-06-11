import styled from "styled-components/macro"
import Skeleton from "../CustomSkeleton"
import useFetch from "../../assets/hooks/useFetch"
import breakpoints from "../../assets/breakpoints"
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
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 72ch;
  margin: 3rem auto;
  padding: 1rem;
  color: var(--text-color-2);
  text-align: center;
  overflow-x: hidden;
  border-radius: 1rem;
  box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.05);
  background: linear-gradient(var(--app-color-2) 70%, transparent);

  @media (min-width: ${breakpoints.lg1}) {
    padding: 2rem;
  }
  @media (min-width: ${breakpoints.lg2}) {
    font-size: 1.15rem;
    max-width: 100ch;
    padding-inline: 4rem;
  }
  @media (min-width: ${breakpoints.lg3}) {
    grid-column: 1 / 2;
  }
`

export default AboutCountry