import React from 'react';
import styled from 'styled-components';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Youtube = () => {

    return (
        <YoutubeStyled className='Youtube'>
            10 Reasons Why You Should Travel Right NOW!
            <LiteYouTubeEmbed
                id="fP582Ro62hQ"
                title="10 Reasons Why YOU SHOULD TRAVEL the World RIGHT NOW!"
            />
        </YoutubeStyled>
    );
}

export default Youtube;

const YoutubeStyled = styled.div`
    background-color: #51738b;
    padding: 20px;
    margin: 10px 0px;
`;