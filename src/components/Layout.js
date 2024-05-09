/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"



import '../css/reset.css'
import '../css/styles.css';

import Header from "./Navigation"
import Footer from "./Footer";

// import Footer from './Footer';


function Layout({ children }) {
  return (
    <>

      <Header />
      {/* <div className="smooth-scroll-content"> */}
      <main>{children}</main>
      {/* </div> */}
      <Footer />
 
    </>
  );
}

export default Layout;