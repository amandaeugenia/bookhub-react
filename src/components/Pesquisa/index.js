import Input from "../Input"
import styled from 'styled-components'
import { useState } from "react"
import { useEffect } from "react"
import { getLivros } from "../../Services/livros"
import { postFavorites } from "../../Services/favorites"



const SearchContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 180x;
        width: 100%;
`
const Titulo = styled.h1`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h2`
        color: #FFF;
        font-size: 20PX;
        font-weight: 500;
        margin-bottom: 40px;
`
const Resultado = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;
        p {
            width: 200px;
        }
        img {
            width: 100px;
        }
        &:hover {
            border: 1px solid white;
        }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
    fetchLivros()
    }, [])


    async function fetchLivros() {
    const livrosDaApi = await getLivros()
    setLivros(livrosDaApi)
    }

    async function insertFavorite (id) {
    await postFavorites(id)
    alert (`Livro de ID ${id} inserido nos favoritos`)
}    
    return (
        <SearchContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre o que procura em nossa estante</Subtitulo>
            <Input
                placeholder= "O que gostaria de ler?"
               onChange = { evento => {
                    const textoDigitado = evento.target.value
                    if (textoDigitado.trim() === '') {
                        setLivrosPesquisados([]);
                        return;
                      }
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
               }
               }
            />
           {livrosPesquisados.map ( livro => (
            <Resultado onClick={() => insertFavorite (livro.id)}>
                    
                    <p>{livro.nome}</p>
            </Resultado>
     ))} 
        </SearchContainer>
        
    )
 }

export default Pesquisa

