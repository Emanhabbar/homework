import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Format from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Format />
  </StrictMode>,
)
