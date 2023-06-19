import logo from '../../images/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div `
display: flex;
margin-left: 50px;
padding: 5px;
width: 150;
height: 100px;
`
function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt="logo"></img>
        </LogoContainer>
    )
}
export default Logo