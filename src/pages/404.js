import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Email from '../components/sections/Email'

const NotFound = () => {
 const i = true
 return (
  <Layout alt>
   <Helmet>
    <meta name="robots" content="noindex" />
   </Helmet>
   <Email
    message="404"
    title="Page not found"
    text="This page has either changes or is no longer available"
   />
  </Layout>
 )
}

export default NotFound
