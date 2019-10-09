module.exports = {
  siteMetadata: {
    title: `Club RCIB`,
    description: `Define a one line description here`,
    author: `Iain Duff`,
},
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`]
          },
          {
            family: `Mansalva`,
            variants: [`400`],
            subsets: [`latin`]
          },
          {
            family: `Quicksand`,
            variants: [`300`,`400`,`500`],
            subsets: [`latin`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6jd9q0n722ij`,
        accessToken: `1LwPCI1fAR2lXJcWdTrYQh_7sktEtZnFugm7kaoqexA`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
