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

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);