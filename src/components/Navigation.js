import { graphql, useStaticQuery, Link } from "gatsby"
import React, { useState, useEffect } from "react"
import NavigationStyles from "../styles/NavigationStyles"
import Image from "./Image"
// import { MdClose } from 'react-icons/md';
// import clsx from 'clsx';
// import HeaderStyles from '../styles/HeaderStyles';
// import { menu } from '../constants/menu';
// import Logo from './Logo';
// import ActionButton from './buttons/ActionButton';
// import Button from './buttons/Button';

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulHomePage {
          edges {
            node {
              groupCode
              phoneLink
              emailTemplateLink {
                emailTemplateLink
              }
            }
          }
        }
        allContentfulCommonComponents {
          edges {
            node {
              hotelLogo {
                file {
                  url
                  contentType
                  fileName
                }
                gatsbyImageData
                url
                title
              }
            }
          }
        }
      }
    `
  )

  // const data = useStaticQuery (
  //     graphql`
  //         query  {
  //             allContentfulNavigationHeader {
  //                 edges {
  //                 node {
  //                     id
  //                     callToActionLink
  //                     callToActionText
  //                     logo {
  //                         file {
  //                             url
  //                             contentType
  //                             fileName
  //                         }
  //                         svg {
  //                             absolutePath
  //                             content
  //                             dataURI
  //                             originalContent
  //                             relativePath
  //                         }
  //                         gatsbyImageData
  //                         title
  //                         url
  //                     }
  //                 }
  //                 }
  //             }
  //             }
  //     `
  // );

  const headerData = data.allContentfulCommonComponents.edges[0].node
  const logoUrl = headerData.hotelLogo.url
  const altText = headerData.hotelLogo.title
  const emailTemplateLink =
    data.allContentfulHomePage.edges[0].node.emailTemplateLink.emailTemplateLink
  const callToActionText = "Book Now";
  const callToActionLink = emailTemplateLink;


  //   const [isNavOpen, setIsNavOpen] = useState(false);
  //   const handleNavItemClick = () => {
  //     if (isNavOpen) {
  //       setIsNavOpen(false);
  //     }
  //   };

  // let [animationDelay, setState] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => setState(!animationDelay), 4000)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <NavigationStyles>
      <section className="">
        <Link to="/" className="logo-container">
          <img alt={altText} className="logo" src={logoUrl}></img>
        </Link>
        <div className="nav-right">
        {/* <Link to="/" className="logo-container"><img alt={altText} className="logo" src={logoUrl}></img></Link> */}
        <div className="nav-link">
          <Link to="/rooms" activeClassName={`active`}>ROOMS</Link>
        </div>
        <div className="button">
          <a href={callToActionLink}><button>{callToActionText}</button></a>
          {/* <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path className={animationDelay ? "" : "animation-delay-none"} fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />
            </svg> */}
        </div>
        </div>
      </section>
    </NavigationStyles>
  )
}

export default Header
