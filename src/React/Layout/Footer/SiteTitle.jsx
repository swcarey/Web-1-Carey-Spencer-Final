import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>A Taste of the World</h2>
            <div className="copyright">&copy; 2022. All rights reserved.</div> 
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    h2 {
        margin: 5px 0px;
        font-size: 14px;
        color: white;

    }
    .copyright {
        font-size: 14px;
        color: #333333;
    }
`;