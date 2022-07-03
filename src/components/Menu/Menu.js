import imagenHeader from '../../images/Breaking_Bad_header.png'
import { useDispatch } from 'react-redux';
import { changeLenguageToEnglish, changeLenguageToSpanish } from '../../charactersState';

export const Menu = () => {
    const dispatch = useDispatch()

    return (
        <div className='header_menu_container'>
            <img src={imagenHeader} className='img_header' />
            <div className='header_lenguage'>
                <button id='english' onClick={() => dispatch(changeLenguageToSpanish())}>ES</button><button data-testid='english' onClick={() => dispatch(changeLenguageToEnglish())}>EN</button>
            </div>
        </div>
    );
}

