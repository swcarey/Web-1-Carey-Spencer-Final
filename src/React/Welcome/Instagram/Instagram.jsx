import React from 'react';
import styled from 'styled-components';

import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {

    return (
        <InstagramStyled className='Instagram'>
            Instagram
            <InstagramEmbed
                url='https://www.instagram.com/TravellingThroughTheWorld/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            /> 
        </InstagramStyled>
    );
}

export default Instagram;

const InstagramStyled = styled.div`
    background-color: #51738b;
    padding: 20px;
    margin: 10px 0px;
`;