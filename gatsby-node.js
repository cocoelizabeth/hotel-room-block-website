/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 * 
 * 
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

// const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
    const roomPageTemplate = require.resolve('./src/templates/room-page.js');
    const { createPage } = actions;
    const result = await graphql(`
        {
            allContentfulHotelRoomType {
                edges {
                    node {
                        id
                        categoryName
                        slug
                    }
                }
            }
        }
    `);
    if (result.errors) throw result.errors;
    const rooms = result.data.allContentfulHotelRoomType.edges;
    
    rooms.forEach((room) => {
       let slug = room.node.slug.split("/").pop();

        createPage({
            path: `/rooms/${slug}`,
            component: roomPageTemplate,
            context: {id: room.node.id},
        })
    })
}
// export const pageQuery = graphql`
//   query {
//     allContentfulHotelRoomType {
//       edges {
//         node {
//           categoryName
//           slug
//           pricePerNight
//           squareFeet
//           imageGallery {
//             gatsbyImageData
//             file {
//               url
//               contentType
//             }
//             description
//             title
//           }
//           shortDescription {
//             shortDescription
//           }
//           longDescription {
//             raw
//           }
//         }
//       }
//     }
//   }
// `