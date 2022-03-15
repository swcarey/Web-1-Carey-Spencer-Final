import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAnchor,
} from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={ faAnchor } />

const SiteLogo = () => {

    return (
        <SiteLogoStyled className='SiteLogo'>
            <FontAwesomeIcon icon={ faAnchor } className='anchor-icon' /> 
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

    svg.anchor-icon {
        width: 100px;
        height: auto;
        color: #FFFFFF;
    }
`;