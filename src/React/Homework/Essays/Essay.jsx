import React from 'react' ;
import styled from 'styled-components'

const Essay = ({q, children}) => {
    return (
    <EssayStyled>
            <h3>{ q }</h3>
            <div className="answer">
                { children }
            </div>
        </EssayStyled>
    )
}

export default Essay;

const EssayStyled = styled.div`
    background-color: gray;
    padding: 20px;
    margin: 20px 0px;

    h3 {
        margin: 0px;
        background-color: teal;
        padding: 10px;
        color: white;
    }

    .answer {
        background-color: white;
        padding: 20px;
    }
`;