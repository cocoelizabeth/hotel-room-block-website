import * as React from "react"
import { Link, graphql, navigate, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import RichText from "../components/richText"
import HomepageStyles from "../styles/HomepageStyles";
import Accordian from "../components/Accordian";



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
                  richText {
                    raw
                  }
                  title
                }
                welcomeMessage {
                  welcomeMessage
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
const welcomeMessage = homepageData.welcomeMessage.welcomeMessage;

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


// export default class IndexPage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.copy = props.data.allContentfulTextSection.edges[0].node.richText;
//       this.text = props.data.allContentfulTextSection.edges[0].node.title
//   }
//   render() {
//     return(
//       <Layout>
//         <RichText 
//           title={this.title} 
//           copy={this.copy}
//         />

//       </Layout>

      
//     )
//   }
// }
// const IndexPage = () => (
//   <Layout>
//     <div className={styles.textCenter}>
//       <StaticImage
//         src="../images/example.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ marginBottom: `var(--space-3)` }}
//       />
//       <p>
//       {pageQuery.map((text, i) => (
//       <React.Fragment key={link.url}>
//         <a href={`${link.url}${utmParameters}`}>{link.text}</a>
//         {i !== moreLinks.length - 1 && <> · </>}
//       </React.Fragment>
//     ))}
//       </p>
//       <h1>
//         Welcome to <b>Gatsby!</b>
//       </h1>
//       <p className={styles.intro}>
//         <b>Example pages:</b>{" "}
//         {samplePageLinks.map((link, i) => (
//           <React.Fragment key={link.url}>
//             <Link to={link.url}>{link.text}</Link>
//             {i !== samplePageLinks.length - 1 && <> · </>}
//           </React.Fragment>
//         ))}
//         <br />
//         Edit <code>src/pages/index.js</code> to update this page.
//       </p>
//     </div>
//     <ul className={styles.list}>
//       {links.map(link => (
//         <li key={link.url} className={styles.listItem}>
//           <a
//             className={styles.listItemLink}
//             href={`${link.url}${utmParameters}`}
//           >
//             {link.text} ↗
//           </a>
//           <p className={styles.listItemDescription}>{link.description}</p>
//         </li>
//       ))}
//     </ul>
//     {moreLinks.map((link, i) => (
//       <React.Fragment key={link.url}>
//         <a href={`${link.url}${utmParameters}`}>{link.text}</a>
//         {i !== moreLinks.length - 1 && <> · </>}
//       </React.Fragment>
//     ))}
//   </Layout>
// )

// /**

// export const Head = () => <Seo title="Home" />

// export default IndexPage

// export const pageQuery = graphql`
//       query  {
//         allContentfulTextSection {
//           edges {
//             node {
//               title
//               richText {
//                 raw
//               }
//             }
//           }
//         }
//       }
// `




