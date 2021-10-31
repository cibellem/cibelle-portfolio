module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cibellemontor.com",
    title: "Cibelle Portfolio",
    pathPrefix: "/cibelle-portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-198875821-1",
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/cmlogo.svg",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
