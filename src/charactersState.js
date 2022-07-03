import { createSlice } from "@reduxjs/toolkit";
import { changeLanguage } from 'i18next';

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        isLoading: false,
        lenguage: 'es'
    },
    reducers: {
        getCharactersFetch: (state) => {
            state.isLoading = true;
        },
        getCharactersComplete: (state, action) => {
            state.characters = action.payload;
            state.isLoading = false;
        },
        getCharactersFailure: (state) => {
            state.isLoading = false;
            changeLanguage('es');

        },
        changeLenguageToEnglish: (state) => {
            state.isLoading = true;
            state.lenguage = 'en';
            changeLanguage('en');
            state.isLoading = false;

        },
        changeLenguageToSpanish: (state) => {
            state.isLoading = true;
            state.lenguage = 'es';
            changeLanguage('es');
            state.isLoading = false;

        },
        loadingApp: (state) => {
            state.isLoading = true;
        },
        loadingAppComplete: (state) => {
            state.isLoading = false;
        },
    }
})

export const { getCharactersFetch, getCharactersComplete, getCharactersFailure, changeLenguageToEnglish, changeLenguageToSpanish, loadingApp, loadingAppComplete } = charactersSlice.actions;
export default charactersSlice.reducer;