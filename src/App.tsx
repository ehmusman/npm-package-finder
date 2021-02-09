import React from 'react';
import {Provider} from 'react-redux';
import RepositoriesList from './components/repositories/RepositoriesList';
import {store} from './store'

import './App.css'

function App() {
  return (
    <Provider store={store}>
    <div className='container'>
      <h1>Search for Package</h1>
      <RepositoriesList />
    </div>
    </Provider>
  );
}

export default App;
