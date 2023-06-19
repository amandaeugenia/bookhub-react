import user from '../../images/user.png'
import search from '../../images/search.png'
import styled from 'styled-components'

const Icone = styled.li`
color: white;
display: flex;
font-size: 20px;     
padding: 10px;
margin right: 20px;
text-align: center;
justify-content: space-around;

`
const Icones = styled.ul`
display: flex;
margin: 20px;
padding: 10px;
align-items: center;
justify-content: space between;
gap: 10px;

`
const icones = [user, search]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
            <Icone><img src={icone}></img></Icone>
            )) }
        </Icones>
    )
}
export default IconesHeader