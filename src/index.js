import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Pages
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/categoria';


//Desafio para criar tela depois
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);