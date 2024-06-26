import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { persistor } from './redux/store.js'

import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
          </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
