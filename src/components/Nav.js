import React, { useState } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import NutrackerLogo from '../assets/images/nutcracker-logo.png';

const NavStyles = styled.nav``;
const Nav = () => {
  const i = true;
  return (
    <NavStyles>
      <div className="nav">
        <h1>Nav</h1>
      </div>
    </NavStyles>
  );
};

export default Nav;
