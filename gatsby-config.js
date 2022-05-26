module.exports = {
  siteMetadata: {
    title: `Home with TJ`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-theme-ui", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages",
    }, {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['League Spartan:300,400,500,600', 'Droid Serif']
        }
      }
    }, {
      resolve: 'gatsby-plugin-global-context',
      options: {
        context: {
          mount: ""
        }
      }
    },
  ]
};