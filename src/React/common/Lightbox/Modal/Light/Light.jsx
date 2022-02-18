import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header.jsx';
import Main from './Main.jsx';

const Light = ({title, modalContent}) => {

    return (
        <LightStyled className='Light'>
            Light 
            <Header title={ title } />
            <Main modalContent={ modalContent } />
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    z-index: 1001;

    background-color: white;

    width: 300px;
    height: auto;

`;