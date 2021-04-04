/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lotsa Yummies!`,
    author: "Mark Chaves",
    description: "Pandas munching on yummy stuff.",
    siteUrl: "https://www.caughtmyeye.cc/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/marklchaves",
      },
      {
        name: "github",
        url: "https://github.com/marklchaves",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
