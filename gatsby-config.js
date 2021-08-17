module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Nuan Ho",
    description: "Official website for the Australian artist Nuan Ho.",
    author: "Nuan Ho",
    copyright: "2021 Nuan Ho and Naked Lunch",
    keywords: `art,
    painting,
    australia,
    sydney,
    fine art,
    surreal`,
    image: `src/images/exit-wound.jpg`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `black`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archivedartwork`,
        path: `${__dirname}/content/archived-artwork`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featuredartwork`,
        path: `${__dirname}/content/featured-artwork`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/content/about`,
      },
    },
  ],
};
