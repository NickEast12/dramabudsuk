// require('dotenv').config({ path: '.env' });
import dotenv from 'dotenv'

dotenv.config({
 path: '.env',
})
module.exports = {
 siteMetadata: {
  title: `Dramabuds | Franchise Opportunity | Drama classes, theatre and singing lessons, creative stories and parties for children`,
  siteUrl: `https://dramabudsuk.co.uk/`,
  description: `Dramabuds is an exciting franchise opportunity for those that love drama school, the performing arts and want to make a change in children’s lives through theatre.`,
  twitter: `@comebacktothis`,
  image: `/icon.png`,
 },
 plugins: [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-preload-fonts`,
  `gatsby-plugin-advanced-sitemap`,
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    name: `images`,
    path: `${__dirname}/src/assets/images`,
   },
  },
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    name: `pdf`,
    path: `${__dirname}/src/assets/pdf`,
   },
  },
  {
   resolve: `gatsby-source-sanity`,
   options: {
    projectId: `u626xl7i`,
    dataset: `production`,
    token: process.env.SANITY_GRAPHQL_KEY,
    watchMode: true,
    graphqlTag: 'default',
   },
  },
  {
   resolve: `gatsby-transform-portable-text`,
   options: {
    extendTypes: [{ typeName: `SanityPost`, contentFieldName: 'body' }],
   },
  },
  {
   resolve: 'gatsby-plugin-web-font-loader',
   options: {
    typekit: {
     id: process.env.TYPEKIT_ID,
    },
   },
  },
  {
   resolve: `gatsby-plugin-manifest`,
   options: {
    name: `Dramabuds | Franchise Opportunity | Drama classes, theatre and singing lessons, creative stories and parties for children`,
    short_name: `Dramabuds UK `,
    description: `Dramabuds is an exciting franchise opportunity for those that love drama school, the performing arts and want to make a change in children’s lives through theatre.`,
    start_url: `/`,
    lang: `en`,
    background_color: `#162129`,
    theme_color: `rgb(249, 48, 54)`,
    display: `minimal-ui`,
    icon: `./src/assets/images/icon.png`,
   },
  },
  {
   resolve: `gatsby-plugin-react-svg`,
   options: {
    rule: {
     include: /svgs/,
    },
   },
  },
  {
   resolve: `gatsby-plugin-nprogress`,
   options: {
    // Setting a color is optional.
    color: `#1bbc9b`,
    // Disable the loading spinner.
    showSpinner: true,
   },
  },
  {
   resolve: `gatsby-plugin-google-analytics`,
   options: {
    trackingId: '1010101010',
    head: true,
   },
  },
  {
   resolve: `gatsby-plugin-gdpr-cookies`,
   options: {
    googleAnalytics: {
     trackingId: '1010101010',
     anonymize: true,
    },
    environments: ['production', 'development'],
   },
  },
  {
   resolve: 'gatsby-plugin-robots-txt',
   options: {
    host: 'https://www.dramabudsuk.co.uk',
    sitemap: 'https://www.dramabudsuk.co.uk/sitemap.xml',
    policy: [{ userAgent: '*', allow: '/' }],
   },
  },
  {
   resolve: `gatsby-plugin-breadcrumb`,
   options: {
    useAutoGen: true,
    exclude: [
     `/dev-404-page/`,
     `/404/`,
     `/404.html`,
     `/offline-plugin-app-shell-fallback/`,
    ],
    trailingSlashes: false,
   },
  },
 ],
}
