import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import charactersSaga from '../charactersSaga';
import charactersReducer from '../charactersState';

const saga = createSagaMiddleware();
 const store = configureStore({
  reducer: {
    breakingbad: charactersReducer
  },
  middleware: [saga]
})
saga.run(charactersSaga);

export default store;