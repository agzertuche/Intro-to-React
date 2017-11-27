import React from 'react';
import Main from '../Main';
import Nav from '../Nav';
import configureStore from '../../store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { albumActions, photoActions } from '../../actions';
import 'semantic-ui-css/semantic.min.css';

const App = () => {

  const store = configureStore();
  store.dispatch(albumActions.loadAlbums());
  store.dispatch(photoActions.loadPhotos());

  return (
    <Provider store={store}>
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
