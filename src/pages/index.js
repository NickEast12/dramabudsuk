import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
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

if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
}

const index = ({ data }) => {
    const blogs = data.testing.nodes
    return (
        <Layout>
            <Hero />
            <Welcome id="test" />
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
            <Testimonial
                quote="Dramabuds has a team of wonderful, supportive, hardworking and kind humans whose main focus and vision is centred around giving the children the best possible drama experience. If you have the same passion and vision and want an opportunity to start and grow a business, "
                strong="Dramabuds is the perfect place to start."
                name="Georgia Thompson"
                location="Dramabuds, Wandsworth"
            >
                <StaticImage
                    src="../assets/images/georgia.jpeg"
                    alt="Georgia Thompson | Dramabuds Wandsworth "
                    placeholder="blurred"
                />
            </Testimonial>
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
