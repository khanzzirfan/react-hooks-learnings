import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from '../store';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import './App.css';
import TodoLayout from '../layouts/Todos';
import theme from '../theme';

const HomePage = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="jumbotron">
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <Router history={history}>
              <Switch>
                <Route exact path="/" component={TodoLayout} />
                <Route path="/login" component={HomePage} />
                <Route path="/register" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export { App };
