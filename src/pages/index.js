import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/functional/SEO'
import Logo from '../svgs/dramabuds-logo.svg'
import ImgComp from '../components/functional/Image'
import Hero from '../components/sections/Hero'
import Welcome from '../components/sections/Welcome'
import Opportunity from '../components/sections/Opportunity'
import OurFranchise from '../components/sections/OurFranchise'
import FlowerIcon from '../svgs/flower.svg'
import AltFlowerIcon from '../svgs/alt-flower.svg'
import FirstCTA from '../components/sections/FirstCTA'
import Areas from '../components/sections/Areas'
import Testimonial from '../components/sections/Testimonial'
import FoundersNotes from '../components/sections/FoundersNotes'
import WhatWeAreLookingFor from '../components/sections/WhatWeAreLookingFor'
import SecondCTA from '../components/sections/SecondCTA'

const index = ({ data }) => {
    const blogs = data.testing.nodes
    return (
        <Layout>
            <Hero />
            <Welcome />
            <div className="f-a-a">
                <AltFlowerIcon />
            </div>
            <OurFranchise />
            <div className="f-a">
                <FlowerIcon />
            </div>
            <Opportunity />
            <FirstCTA />
            <Areas />
            <Testimonial />
            <WhatWeAreLookingFor />
            <FoundersNotes />
            <SecondCTA />
        </Layout>
    )
}

export default index

export const query = graphql`
    query MyQuery {
        testing: allSanityPost {
            nodes {
                title
                id
                mainImage {
                    alt
                    asset {
                        gatsbyImageData(
                            width: 200
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    }
`
