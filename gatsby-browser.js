/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import React from 'react';
import Layout from './src/components/Layout';
import '@fontsource/fira-mono';
import '@fontsource/marcellus';
import '@fontsource/cinzel';
import '@fontsource/roboto';
import "@fontsource/roboto/100.css"; 
import "@fontsource/roboto/300.css"; 
import "@fontsource/roboto/500.css"; 
import "@fontsource/roboto/700.css"; 
import "@fontsource/roboto/900.css";
import "@fontsource/cinzel/400.css"; 
import "@fontsource/cinzel/500.css"; 
import "@fontsource/cinzel/600.css"; 
import "@fontsource/cinzel/700.css"; 
import "@fontsource/cinzel/800.css"; 
import "@fontsource/cinzel/900.css";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);