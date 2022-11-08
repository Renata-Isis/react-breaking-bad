import React from 'react';

import { useState } from 'react';

import * as C from "./styles";

const CharactersSearch = () => {
    const [onlyCharacters, setOnlyCharacters] = useState([]);
    const [searchCharacters, setSearchCharacters] = useState([]);

    const reqCharacter = async () => {
        const res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${onlyCharacters}`);
        const json = await res.json();
        return setSearchCharacters(json)
    }

    const getValueInput = (e) => {
        setOnlyCharacters(e.target.value);
    }

    return (
        <>
            <C.Fieldset>Pesquisar Personagem:
                <C.Input type="text"
                    placeholder='Digite o nome do personagem'
                    value={onlyCharacters}
                    onChange={getValueInput} />
            <C.Button onClick={reqCharacter}>Pesquisar...</C.Button>
            </C.Fieldset>

            {<C.searchCardContainer>
                {searchCharacters.map((element) => (
                    <React.Fragment key={element.char_id}>
                        <C.searchCard>
                            <C.searchName>{element.name}</C.searchName>
                            <C.searchContainerImg>
                                <C.searchImg src={element.img} alt="" />
                            </C.searchContainerImg>
                            <C.searchName>Apelido: {element.nickname}</C.searchName>
                            <C.searchName>Status: {element.status}</C.searchName>
                            <C.searchName>Ator: {element.portrayed}</C.searchName>
                        </C.searchCard>
                    </React.Fragment>
                ))}
            </C.searchCardContainer>}
        </>
    );
}

export default CharactersSearch;