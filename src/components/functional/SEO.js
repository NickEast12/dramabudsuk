import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

const SEO = ({ children, location, description, title, img, schemaMarkup }) => {
 const { pathname } = useLocation()
 const { site, data } = useStaticQuery(graphql`
  query {
   site {
    siteMetadata {
     title
     description
     twitter
     siteUrl
     image
    }
   }
   data: allSanitySiteSettings {
    nodes {
     title
     openGraph {
      title
      description
      image {
       asset {
        url
       }
      }
     }
    }
   }
  }
 `)
 const settings = data.nodes[0]

 return (
  <Helmet>
   <html lang="en" />
   <link rel="stylesheet" href="https://use.typekit.net/fmh7hnk.css" />
   <title>{title || settings.openGraph.title}</title>
   <meta
    name="description"
    content={description || settings.openGraph.description}
   />
   <link rel="canonical" href={`${site.siteMetadata.siteUrl}${pathname}`} />
   <link rel="icon" href="/favicon.ico" />
   <link rel="alternate icon" href="/favicon.ico" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta charSet="utf-8" />
   <meta
    property="og:url"
    content={`${site.siteMetadata.siteUrl}${pathname}`}
   />
   <meta property="og:type" content="website" />
   <meta property="og:title" content={title || settings.openGraph.title} />
   <meta
    property="og:description"
    content={description || settings.openGraph.description}
   />
   <meta
    property="og:image"
    content={img || settings.openGraph.image.asset.url}
   />
   <meta name="twitter:card" content="summary_large_image" />
   <meta property="twitter:domain" content={`${site.siteMetadata.siteUrl}`} />
   <meta
    property="twitter:url"
    content={`${site.siteMetadata.siteUrl}${pathname}`}
   />
   <meta name="twitter:creator" content={site.siteMetadata.twitter} />
   <meta name="twitter:title" content={title || settings.openGraph.title} />
   <meta
    name="twitter:description"
    content={description || settings.openGraph.description}
   />
   <meta
    name="twitter:image"
    content={img || settings.openGraph.image.asset.url}
   />
   {schemaMarkup && (
    <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
   )}
  </Helmet>
 )
}

SEO.propTypes = {
 children: PropTypes.any,
 description: PropTypes.any,
 img: PropTypes.any,
 location: PropTypes.any,
 schemaMarkup: PropTypes.any,
 title: PropTypes.any,
}

export default SEO

// // titleTemplate={`%s - ${site.siteMetadata.title}`}
