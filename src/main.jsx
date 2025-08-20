import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './assets/page/Home.jsx'
import './assets/css/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
