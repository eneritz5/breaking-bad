import { Link } from 'react-router-dom';
import Character from '../Character/Character';

export const EachCharacter = (eachCharacter) => {
    return (
        <Link to={`/${eachCharacter.character.char_id}`} element={<Character character={eachCharacter} />} character={eachCharacter.character} className="decoration-none">
            <div key={eachCharacter.character.char_id} className='character_card'>
                <img className='character_img' src={eachCharacter.character.img} alt="character image" />
                <h4 className='character_name'>{eachCharacter.character.name}</h4>
            </div>
        </Link>

    )
}