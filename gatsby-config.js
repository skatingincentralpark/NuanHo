module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Artist Site",
    description: "Site for artists",
    author: "Nuan Ho",
    copyright: "this website is copyright 2021 naked lunch",
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
        name: `portfolio`,
        path: `${__dirname}/content/artwork`,
      },
    },
  ],
};
