import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts---------------------------*/
import { servicesData } from './servicesData.js';

/* Componenets ---------------------------*/
import ServiceGallery from './ServiceGallery/ServiceGallery.jsx'
import ServiceMenu from './ServiceMenu/ServiceMenu.jsx'

const Services = () => {

    const [chosenCategory, chosenCategoryUpdate] = useState('All');

    return (
        <ServicesStyled className='Services'>
            <h1>Destinations</h1> 
            <ServiceMenu categories={ servicesData.categories } chosenCategory={ chosenCategory } chosenCategoryUpdate={ chosenCategoryUpdate } />
            <ServiceGallery services={ servicesData.services } chosenCategory={ chosenCategory } />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    
`;