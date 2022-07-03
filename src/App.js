import './App.css';
import './components/Loader/Loader.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharactersFetch } from './charactersState';
import { EachCharacter } from './components/CharacterHome/EachCharacterHome';
import { Loader } from './components/Loader/Loader';
import {Menu} from './components/Menu/Menu';
import { t } from 'i18next';

function App() {
  const characters = useSelector(state => state.breakingbad.characters);
  const isLoading = useSelector(state => state.breakingbad.isLoading);
  const lenguage = useSelector(state => state.breakingbad.lenguage)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersFetch());
  }, [dispatch])

  return (
    <div>
      {isLoading ?
        <div className='loader_container'>
          <Loader text={t("components:loader_cargando_text")} />
        </div>
        :
        <div className='header_characters_container'>
          <Menu lenguage={lenguage} />
          <div className='all_characters_container'>
            {
              characters.map(eachCharacter => {
                return (
                  <EachCharacter key={eachCharacter.char_id} character={eachCharacter} />
                )
              })
            }
          </div>
        </div>
      }

    </div>
  );
}

export default App;
