import styled from 'styled-components'

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.color = "black"};
    font-size: ${props => props.fontSize = "30px" || "16px"};
    text-align: center;
    margin: 0;
`
