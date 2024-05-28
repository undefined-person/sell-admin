import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app/app'
import { AppProvider } from './app/app-provider'
import './app/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
