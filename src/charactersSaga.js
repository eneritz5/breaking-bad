import { put, takeEvery } from 'redux-saga/effects'
import { getCharactersComplete } from './charactersState';

function* getCharactersFetchData() {
    const characters = yield fetch('https://www.breakingbadapi.com/api/characters/')
    const charactersJson = yield characters.json();
    yield put(getCharactersComplete(charactersJson));
}

function* charactersSaga() {
    yield takeEvery('characters/getCharactersFetch', getCharactersFetchData)
}

export default charactersSaga;