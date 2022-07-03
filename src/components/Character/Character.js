import '../../App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Loader } from '../Loader/Loader';
import { Menu } from '../Menu/Menu';
import { loadingApp, loadingAppComplete } from '../../charactersState';
import axios from 'axios';

export const Character = (props) => {
    const [randomQuote, setRandomQuote] = useState('');
    const [hasRandomQuotes, setHasRandomQuotes] = useState(false);
    const [characterToPrint, setCharacterToPrint] = useState({});
    const [query, setQuery] = useState('');
    const { t } = useTranslation();
    const { id } = useParams();
    const dispatch = useDispatch();
    const urlQuotte = 'https://www.breakingbadapi.com/api/quote/random?author='
    const urlCharacter = 'https://www.breakingbadapi.com/api/characters/'
    const loaderText = t("components:loader_cargando_text_quote");

    const breakingBadState = useSelector((state) => { return state })
    const { isLoading } = breakingBadState.breakingbad;


    const changeHasRandomQuotes = (data) => {
        if (data[0] && data[0].quote) {
            setRandomQuote(data[0].quote);
            setHasRandomQuotes(true);

        } else {
            setRandomQuote(t("components:no_quote"))
            setHasRandomQuotes(false);
        }
    }

    const obtenerFrase = async () => {
        dispatch(loadingApp());
        try {
            const urlFetch = urlQuotte + query;
            const result = await fetch(urlFetch)
            const data = await result.json();
            changeHasRandomQuotes(data)
            dispatch(loadingAppComplete());

        } catch (error) {
            dispatch(loadingAppComplete());
            console.log(error)
        }
    }

    useEffect(() => {
        try {
            axios.get(urlCharacter + id).then((res) => {
                setCharacterToPrint(res.data[0]);
                const name = res.data[0].name;
                setQuery(name.replace(' ', '+'));
            })
        } catch (error) {
            console.log(error)
        }
        obtenerFrase();
    }, [id])

    return (
        <div>
            {
                isLoading ? <Loader text={loaderText} />
                    :
                    <div className='character_page'>
                        <Menu />
                        <a href='/'>{t("components:back_button")}</a>
                        <div className='align-s-center character-info'>
                            <h1>{characterToPrint.name}</h1>
                            <img src={characterToPrint.img} className="character_img_page" alt="character img" />
                            <div className='character_info'>
                            <p>{t("components:character_birthday")}: {characterToPrint.birthday}</p>
                            <p>{t("components:character_nickname")}: {characterToPrint.nickname}</p>
                            <p>{t("components:character_occupation")}: {characterToPrint.occupation}</p>
                            <p>{t("components:character_portrayed")}: {characterToPrint.portrayed}</p>
                            <p>{t("components:character_appearance")}: {characterToPrint.appearance}</p>
                            <p>{t("components:character_status")}: {characterToPrint.status}</p>
                            <p>{t("components:character_quote")}: {randomQuote}</p>
                            {hasRandomQuotes &&
                                <button data-testid='btn_quotte' onClick={() => obtenerFrase()}>{t("components:other_quote")}</button>
                            }
                            </div>
                        </div>
                    </div>
            }

        </div>

    );
}

export default Character;
