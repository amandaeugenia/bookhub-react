import styled from 'styled-components'
import { Titulo } from '../Titulo/Titulo'
import reactLogo from '../../images/reactLogo.png'

const CardContainer = styled.div `

        align-items: center;
        background-color: #FFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        margin: 30px auto;
        max-width: 600px;
        padding: 25px 20px;
        justify-content: space-around;
        width: 100%;  
`
const Subtitulo = styled.h3`
        color: #002F52;
        font-size: 18px;
        font-weight: bold;
        margin: 15px 0;

`
const Descricao = styled.p`
        max-width: 300px;
`
const Botao = styled.button`
        background-color: #002F52;
        color: #FFF;
        padding: 10px 0px;
        font-size: 16px;
        border: none;
        font-weight: 900;
        display: block;
        text-align: center;
        width: 150px;
        &:hover {
            cursor: pointer;
`
const ImgLivro = styled.img`
    width: 150px;
    `

function Card ({titulo, subtitulo, descricao, img}) {
    return (
       
            <CardContainer>
                <div>
                    <Titulo 
                        fontSize = "16px"> {titulo} 
                    </Titulo>
                    <Subtitulo>{subtitulo}</Subtitulo>
                    <Descricao>{descricao}</Descricao>
                </div>
                <div>
                    <ImgLivro src = {reactLogo} />
                    <Botao>Saiba mais</Botao>
                </div>    
            </CardContainer>
       
    )
}     
export default Card