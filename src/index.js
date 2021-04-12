import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageHome from './PageHome';
import PageAboutMe from './PageAboutMe';
import Page404 from './Page404';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={PageHome} />
          <Route path="/sobre-mim" component={PageAboutMe} />
          <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
