module.exports = {
  siteMetadata: {
    siteUrl: "https://www.nuanho.netlify.app",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/images/uploads`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: "static",
            },
          },
        ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cv`,
        path: `${__dirname}/content/cv`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nuan Ho`,
        short_name: `Nuan Ho`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon/favicon.png`,
      },
    },
  ],
};
