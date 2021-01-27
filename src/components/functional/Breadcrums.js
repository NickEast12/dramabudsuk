import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Bready = styled.div``;

const Bread = ({ breaddata }) => {
  const elementsNew = [];
  breaddata.crumbs.forEach(createdBread);
  function createdBread(item) {
    const newlast = item.crumbLabel.replace(/-/g, ' ');
    elementsNew.push({ pathname: item.pathname, crumlabel: newlast });
  }
  // console.log(elementsNew)

  return (
    <>
      <Bready>
        <div className="breadcrumb">
          <ul>
            {elementsNew.map((value, index) => (
              <li key={index} className="breadcrumb__wrapper__inner">
                <Link key={index} to={`${value.pathname}`}>
                  {value.crumlabel} <span> / </span>{' '}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Bready>
    </>
  );
};

export default Bread;
