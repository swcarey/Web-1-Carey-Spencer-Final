import React from 'react';
import styled from 'styled-components';

import ReactPinterestTag from 'react-pinterest-tag';

const Pinterest = () => {

    return (
        <PinterestStyled className='Pinterest'>
            Pinterest
            <ReactPinterestTag
                url='https://www.pinterest.co.uk/thecrazytourist/?etslf=3631&eq=the%20crazy'
            />
        </PinterestStyled>
    );
}

export default Pinterest;

const PinterestStyled = styled.div`
    
`;