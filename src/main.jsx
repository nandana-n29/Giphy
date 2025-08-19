import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import gifprovider from './context/gifcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <gifprovider>
    
    <App />
    
    </gifprovider>
    
  </StrictMode>,
)
