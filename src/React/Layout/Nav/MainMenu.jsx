import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const MainMenu = ({showMenuUpdate}) => {

        const clickHandler = () => {
            showMenuUpdate(false);
        }
    return (
        <MainMenuStyled className='MainMenu'>
            <NavLink onClick={ clickHandler} to={ '/' } exact>Welcome</NavLink>
            <NavLink onClick={ clickHandler} to={ '/services' }>Places</NavLink>
            <NavLink onClick={ clickHandler} to={ '/contact' }>Get Info</NavLink>
            <NavLink onClick={ clickHandler} to={ '/login' }>My Account</NavLink>
            <NavLink onClick={ clickHandler} to={ '/homework' }>Homework</NavLink> 
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`
    

    a {
        display: block;
        color: white;
        margin: 5px 0px;
        background-color: #808080;
        height: 50px;
        line-height: 55px;
        text-decoration: none;
        text-align: center;

        text-transform: uppercase;
        font-weight: bold;


        &:hover {
            background-color: #333333;
        }
        &.active {
            color: #FFFFFF;
            background-color: #51738b;
        }
    
    }
    @media ${defaultMediaQueries.mdUp} {
        display: flex;
        justify-content: center;
        a {
            display: inline-block;
            width: 150px;
            margin: 0px 10px;
            font-size: 15px;
            border-radius: 5px;
        }

    }
`;