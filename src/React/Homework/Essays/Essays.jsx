import React from 'react' ;
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return ( 
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?'>
                <ul>
                    <li>Git: </li>
                    <li>Github: </li>
                    <li>Heroku: </li>
                </ul>
            </Essay >
            <Essay q='S3. Explain the difference between HTML, CSS and JS.'>
                <ul>
                    <li>HTML: </li>
                    <li>CSS: </li>
                    <li>JavaScript: </li>
                </ul>>
            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
                <ul>
                    <li>Single Page Apps: </li>
                    <li>Multi-page Apps: </li>
                </ul>>
            </Essay>
            <Essay q='What is the difference between Web Designer, Front End Developer and Back End Developer?'>
                <ul>
                    <li>Web Designer: </li>
                    <li>Front End Developer: </li>
                </ul>>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;