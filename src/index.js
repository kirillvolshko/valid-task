import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore as createStore} from 'redux'
import passwordReducer from './store/reducers';
import { Provider } from 'react-redux';
const store = createStore(passwordReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <App />
  </Provider>,
 
);


