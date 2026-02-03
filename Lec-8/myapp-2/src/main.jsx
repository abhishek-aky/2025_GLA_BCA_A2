import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hi from './Components/Hi.jsx'
import Hello from './Components/hello.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Hi></Hi> */}
    <Hi/>
    <Hello></Hello>
  </StrictMode>,
)
