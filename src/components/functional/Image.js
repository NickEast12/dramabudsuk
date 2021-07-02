import PropTypes from 'prop-types'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ImgComp = ({ data }) => {
    const image = getImage(data.mainImage.asset)
    return <GatsbyImage key={data.id} image={image} alt={data.mainImage.alt} />
}

ImgComp.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.any,
        mainImage: PropTypes.shape({
            alt: PropTypes.any,
            asset: PropTypes.any,
        }),
    }),
}

export default ImgComp
