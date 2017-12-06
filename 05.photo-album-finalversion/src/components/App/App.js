import React from 'react';
import Main from '../Main';
import Nav from '../Nav';
import configureStore from '../../store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const App = () => {

  const store = configureStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Nav />
          <Main />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
