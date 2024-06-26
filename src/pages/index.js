import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import RichText from "../components/richText"
import HomepageStyles from "../styles/HomepageStyles";




export default function Home() {


  const data = useStaticQuery (
    graphql`
        query  {
          allContentfulHomePage {
            edges {
              node {
                emailTemplateLink {
                  emailTemplateLink
                }
                groupCode
                heroImage {
                  gatsbyImageData
                  file {
                    contentType
                    fileName
                    url
                  }
                  description
                }
                phoneLink
                slug
                sections {
                  title
                  order
                  richText {
                    raw
                  }
                }
              }
            }
          }
        }
        
    `
);

const homepageData = data.allContentfulHomePage.edges[0].node;
const mainHeroImageSrcSet = homepageData.heroImage.gatsbyImageData.images.sources[0].srcSet;
const mainHeroImageSrc = homepageData.heroImage.gatsbyImageData.images.fallback.src;
const altText = homepageData.heroImage.description;
const copy = homepageData.sections[0].richText;
const title = homepageData.sections[0].title;


  return(
    <HomepageStyles>
       <div className="hero-image-container fade-in">
         <img src={mainHeroImageSrc} srcSet={mainHeroImageSrcSet} className="hero-image" alt={altText}></img>
       </div>
       <div className="body-copy-container">
        <RichText copy={copy} title={title} />
       </div>
     
    </HomepageStyles>
  )

}
export const Head = () => <Seo title="Home" />






