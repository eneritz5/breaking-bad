import { put, takeEvery } from 'redux-saga/effects'
import { getCharactersComplete } from './charactersState';
import { URL_FETCH_CHARACTERS } from './constantes';

function* getCharactersFetchData() {
    const characters = yield fetch(URL_FETCH_CHARACTERS)
    const charactersJson = yield characters.json();
    yield put(getCharactersComplete(charactersJson));
}

function* charactersSaga() {
    yield takeEvery('characters/getCharactersFetch', getCharactersFetchData)
}

export default charactersSaga;