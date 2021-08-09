import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import SobreNos from './SobreNos/SobreNos';
import Participantes from './Participantes/Participantes';
import Temas from './Temas/Temas';
import Parceiros from './Parceiros/Parceiros'
import Form from './Login/Form'

import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact = {true} component = {App}></Route>
        <Route path = '/sobreNos' component = {SobreNos}></Route>
        <Route path = '/participantes' component = {Participantes}></Route>
        <Route path = '/temas' component = {Temas}></Route>
        <Route path = '/parceiros' component = {Parceiros}></Route>
        <Route path = '/registro' component = {Form}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
