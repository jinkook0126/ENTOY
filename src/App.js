import React from 'react';
import './App.css';
import Routes from './component/Route'
import { createStore } from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux';


function App() {
  let store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
