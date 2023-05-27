import React from 'react'
import ReactDOM from 'react-dom/client'
import { App} from './common/App.tsx'
import './common/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)