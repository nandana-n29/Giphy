import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GifProvider from './context/gifcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifProvider>
    
    <App />

    </GifProvider>
    
  </StrictMode>,
)
