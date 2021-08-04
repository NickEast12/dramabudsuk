import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Email from '../components/sections/Email'

const Success = () => {
 const i = true
 return (
  <Layout alt>
   <Helmet>
    <meta name="robots" content="noindex" />
   </Helmet>
   <Email
    message="Success"
    title="Thank you for getting in touch"
    text="A member of the team will be in touch shortly."
   />
  </Layout>
 )
}

export default Success
