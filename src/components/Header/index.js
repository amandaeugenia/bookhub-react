
import { Link } from 'react-router-dom'
import IconesHeader from '../Icones'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header `
    background-color: white;
    display: flex;
    justify-content: auto;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to = "/">
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader />
        </HeaderContainer>
    )
}


export default Header