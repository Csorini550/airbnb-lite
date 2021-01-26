import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { ModalProvider } from './context/Modal';
import { restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  // window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

// function Root() {
//   return (
//     <ModalProvider>
//       <Provider store={store}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </Provider>
//     </ModalProvider>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
