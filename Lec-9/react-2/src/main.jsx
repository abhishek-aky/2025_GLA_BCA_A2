import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Apple} from './Components/Apple.jsx'
import Counter from './Components/Counter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Apple/> */}
    {/* <Apple/> */}
    <Counter/>
  </StrictMode>,
)
