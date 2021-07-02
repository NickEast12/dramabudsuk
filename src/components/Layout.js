import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import 'normalize.css'
import styles, { ThemeProvider } from 'styled-components'
//* Local imports
import GlobalStyles from '../styles/GlobalStyles'
import Nav from './Nav'
import Footer from './Footer'

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
}
const Layout = ({ children, alt }) => {
    const i = true
    return (
        <>
            <GlobalStyles />
            <Nav className={alt ? 'alternative' : ''} />
            <main>{children}</main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    alt: PropTypes.any,
    children: PropTypes.any,
}

export default Layout
