import './App.css';
import './components/Loader/Loader.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharactersFetch } from './charactersState';
import { EachCharacter } from './components/CharacterHome/EachCharacterHome';
import { Loader } from './components/Loader/Loader';
import { Menu } from './components/Menu/Menu';
import { t } from 'i18next';

function App() {
  const characters = useSelector(state => state.breakingbad.characters);
  const isLoading = useSelector(state => state.breakingbad.isLoading);
  const lenguage = useSelector(state => state.breakingbad.lenguage)
  const dispatch = useDispatch();

  const [charactersToShow, setCharactersToShow] = useState(0);

  useEffect(() => {
    dispatch(getCharactersFetch());
  }, [dispatch])

  const showMore = () => {
    return characters.slice(charactersToShow, charactersToShow + 3);
  }

  const nextPage = () => {
    setCharactersToShow(charactersToShow + 3);
  }

  const pageBefore = () => {
    setCharactersToShow(charactersToShow - 3);
  }


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
              showMore().map(eachCharacter => {
                return (
                  <EachCharacter key={eachCharacter.char_id} character={eachCharacter} />
                )
              })
            }
          </div>
          <div className='paginador'>
            <button className={charactersToShow === 0 ? 'paginador-button-disabled' : 'paginador-button-active'} onClick={() => { pageBefore() }} disabled={charactersToShow <= 0}>{t("components:previus_button")}</button>
            <p>{charactersToShow / 3 + 1}</p>
            <button className={charactersToShow >= characters.length-3 ? 'paginador-button-disabled' : 'paginador-button-active'} onClick={() => { nextPage() }} disabled={charactersToShow >= characters.length-3}>{t("components:next_button")}</button>
          </div>
        </div>
      }

    </div>
  );
}

export default App;
