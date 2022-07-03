import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Character from './components/Character/Character';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import components_es from './translation/es/components.json';
import components_en from './translation/en/components.json';
import store from './store/store'


i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es:
      { components: components_es },
    en:
      { components: components_en }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/:id' element={<Character />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
);
