import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Components/Hello.jsx'
import Product from './Components/Product.jsx'
import LogIn from './Components/LogIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Hello/> */}
    {/* <Product/> */}
    {/* <Product naam = "Abhishek" umar = {26} city = "Mathura"/> */}
    {/* <Product>Abhishek Webtech Mathura</Product> */}
    {/* <Product/> */}



    {/* <LogIn naam="Doraemon" favcolor="khooni-lal" city="Gurugram"/> */}
    <LogIn/>
  </StrictMode>,
)
