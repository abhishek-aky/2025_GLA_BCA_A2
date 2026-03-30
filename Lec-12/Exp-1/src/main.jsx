import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GitHub from './Components/GitHub.jsx'
import Git from './Components/Git.jsx'
import Badmaashi from './Components/Badmaashi.jsx'
import LogIn from './Components/LogIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <GitHub usernaam = "Praveenpandit315"/>
    <GitHub usernaam = "muski-gupta"/>
    <GitHub usernaam = "vishakha-vi"/>
    <GitHub usernaam = "abhishek-aky"/>
    <GitHub usernaam="monukumar98"/>
    <GitHub usernaam="pandeynitin3004"/>
    <GitHub usernaam="crocox8"/>
    <GitHub usernaam="shinchanji"/>
    <GitHub usernaam="samarth0606"/> */}

      {/* <Badmaashi/> */}

      {/* <Badmaashi naam = "Shinchan" stmt = "Ab main itna bhi kuch khaas nhi"/> */}
      {/* <Badmaashi>Yemen ka Shezada Hatim</Badmaashi> */}
      <LogIn/>

  </StrictMode>,
)
