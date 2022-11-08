import React from 'react';

//Styles
import * as C from "../../components/Characters/styles";
import "./Home.css";
import "../CharactersPage/styles.js";

//Hooks
import { useState, useEffect } from 'react';

//Components
import Characters from '../../components/Characters/Characters';
import CharactersSearch from '../../components/CharactersSearch/CharactersSearch';

//Requisição
import Api from '../../Api';

import {Link} from 'react-router-dom';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    req();
  }, []);

  const req = async () => {
    setLoading(true)
    const res = await Api.getAllCharacters();
    setLoading(false);
    setCharacters(res);
  }

  return (
    <>
      {loading &&
        <div className='loading'>Carregando...</div>
      }

      {!loading && characters.length > 0 &&
        <> 
        <C.Content>
        <C.title>
          <p>
            <span className='breakWord'>Br</span>eaking
          </p>
          <p className='moveWord'>
            <span className='breakWord'>Ba</span>d
          </p>
         </C.title>
         <CharactersSearch />
          <C.Container>
            {characters.map((item) => (
              <React.Fragment key={item.char_id}>
              <C.Card > 
                <Characters data={item}/>
                <Link to={`/characters/${item.char_id}`} className='details'>Detalhes</Link>
              </C.Card>
               
              </React.Fragment>
            ))};
          </C.Container>
          </C.Content>
        </>
      }
    </>
  )
}

export default Home;