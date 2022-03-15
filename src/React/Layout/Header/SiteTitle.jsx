import React from 'react';
import styled from 'styled-components';

const SiteTite = () => {

    return (
        <SiteTiteStyled className='SiteTitle'>
            <h2>A Taste of the World</h2>
            <h3>Clever Slogan Goes Here.</h3> 
        </SiteTiteStyled>
    );
}

export default SiteTite;

const SiteTiteStyled = styled.div`
    color: #000000;
    text-align: left;

    h2 {
        margin: 0px;
        font-size: 30px;
    }

    h3 {
        margin: 0px;
        font-size: 20px;
    }
`;