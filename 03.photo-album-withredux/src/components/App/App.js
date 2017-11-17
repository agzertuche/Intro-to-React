import React from 'react';
import Main from '../Main';
import Nav from '../Nav';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

const App = (props) => {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <div>
          <Nav />
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
