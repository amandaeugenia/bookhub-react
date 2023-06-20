import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteFavorite, getFavorites } from '../Services/favorites';
import livroImg from '../images/javascript.png'

const AppContainer = styled.div `
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favorites() {

    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        fetchFavorites()
    }, [])
    
    async function fetchFavorites () {
        const apiFavorites = await getFavorites()
        setFavorites(apiFavorites)
    }

    async function eraseFavorite(id) {
        await deleteFavorite(id)
        await fetchFavorites()
        alert (`Livro de ID ${id} deletado.`)
        
    }

    return (
        <AppContainer>   
       <Titulo>Aqui estão seus livros favoritos:</Titulo>
       <ResultadoContainer>
         { favorites.map(favorite => (
             <Resultado onClick = {() => eraseFavorite (favorite.id)}>
               <p>{favorite.nome}</p>
               <img src={livroImg} alt=''/>
             </Resultado>
                      )) 
         } 
       </ResultadoContainer>
     
        </AppContainer>
        )
}



export default Favorites