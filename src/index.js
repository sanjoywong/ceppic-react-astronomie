import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Acceill from './pages/Acceill';
import Article from './pages/Article';
import Apropos from './pages/Apropos';
import AjouteArtcle from './pages/AjouteArtcle';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header title="React JS"
        texte="librairie javascript fonde par Facebook"/>
         <Routes>
         <Route index element={<Acceill />}/>
        <Route path="article" element={<Article />} />
        <Route path="ajouteArticle" element={<AjouteArtcle />} />
        <Route path="apropos" element={<Apropos />}/>
        
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
