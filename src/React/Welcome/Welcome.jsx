import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';
import Youtube from './Youtube/Youtube.jsx';
import Instagram from './Instagram/Instagram.jsx';


const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <h1>Welcome</h1> 
            <Slideshow />
            <Tabbed />
            <Youtube />
            <Staff />
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;