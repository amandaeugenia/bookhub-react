import { livros } from './dadosLancamentos';
import styled from "styled-components";
import Card from '../Cards';
import livro2 from '../../images/livro2.png'



const LancamentosContainer = styled.div `
        background-color: #EBECEE;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
`
const Titulo = styled.h1`
        width: 100%;
        padding: 30px 0;
        background-color: #FFF;
        color: navy-blue;
        font-size: 36px;
        text-align: center;
        margin: 0;
`
const NovosLivrosContainer = styled.div`
        margin-top: 30px;
        display: flex;
        width: 100%;
        justify-content: center;
        cursor: pointer;
        gap: 20px;
`


function Lancamentos() {
    return (
        <LancamentosContainer>
            <Titulo>NOVOS LANÇAMENTOS</Titulo>
                <NovosLivrosContainer>
                    
                    { livros.map( livro => (
                    <img src={livro.src} alt = ""/>
                ) ) }
                </NovosLivrosContainer>
                <Card
                      titulo = 'Talvez você se interesse por'  
                      subtitulo = 'React'
                      descricao = 'The Road to React: Your journey to master React.js in JavaScript - is a comprehensive and pragmatic yet concise React feat. Hooks book.'
                      img src = {livro2}
                />
        </LancamentosContainer>
        )
}
export default Lancamentos