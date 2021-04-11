import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Sobre from './Sobre';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import pagina404 from './pagina404';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="*" component={pagina404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
