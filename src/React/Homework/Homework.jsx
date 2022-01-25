import React from 'react';
import styled from 'styled-components';

import SunAndMoon from './SunAndMoon.jsx';
import Essays from './Essays/Essays.jsx';
import Essay from './Essays/Essay.jsx';

const Homework = () => {
    return (
        <HomeworkStyled>
                <SunAndMoon />
                <Essays />
                <Essay />
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`
    background-color: gray;
    padding: 20px;
`;