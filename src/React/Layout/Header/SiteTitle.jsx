import React from 'react';
import styled from 'styled-components';

const SiteTite = () => {

    return (
        <SiteTiteStyled className='SiteTite'>
            <h2>Spa Sanctuary</h2>
            <h3>A Spa For Every Occassion</h3> 
        </SiteTiteStyled>
    );
}

export default SiteTite;

const SiteTiteStyled = styled.div`
    color: #064c4c;
    text-align: left;

    h2 {
        margin: 0px;
        font-size: 40px;
    }

    h3 {
        margin: 0px;
        font-size: 20px;
    }
`;