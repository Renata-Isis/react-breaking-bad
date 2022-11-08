import React from 'react';

import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import * as C from "./styles";

const Characters = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  const { char_id } = useParams();

  const url = `https://www.breakingbadapi.com/api/characters/${char_id}`;

  useEffect(() => {
    req();
  }, []);

  const req = async () => {
    setLoading(true)
    const res = await fetch(url);
    const json = await res.json();
    setLoading(false);
    setCharacter(json);
  }

  return (
    <>
      {/* {error && <p>Erro no carregamento...</p>} */}
      {loading && <p>Carregando...</p>}
      {character.map((item) => (
        <React.Fragment key={item.char_id}>
          <div key={item.char_id}>
            <C.cardResult>
              <C.descriptionResult>{item.name}</C.descriptionResult>
              <C.containerImg>
                <C.imgResult src={item.img} alt=""/>
              </C.containerImg>
              <C.descriptionResult>Apelido: {item.nickname}</C.descriptionResult>
              <C.descriptionResult>Status: {item.status}</C.descriptionResult>
              <C.descriptionResult>Ator: {item.portrayed}</C.descriptionResult>
            </C.cardResult>
          </div>
        </React.Fragment>
      ))}
    </>
  )
}

export default Characters;