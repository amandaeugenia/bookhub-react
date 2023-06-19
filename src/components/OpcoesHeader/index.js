import { Link } from 'react-router-dom';
import styled from 'styled-components'

const opcoes = ['Favoritos', 'Categorias', 'Estante'];
const UlHeader = styled.ul `
display: flex;
margin-left: auto;
align-items: center;
`

const LiHeader = styled.li `
color: black;
display: flex;
font-size: 20px;     
padding: 10px;
text-align: center;
justify-content: space-between;
margin-left: auto;
`

function OpcoesHeader() {
    return (
       <UlHeader>
        {opcoes.map ( (opcoes) => (
                <Link to = {`/${opcoes.toLowerCase()}`}><LiHeader><p>{opcoes}</p>
                </LiHeader>   </Link>    
        ))}
    </UlHeader>
    )
    
}

export default OpcoesHeader