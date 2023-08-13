import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import NavBar from './Component/NavBar/NavBar'

ReactDOM.createRoot(document.getElementById('nav')).render(
  <React.StrictMode>
    <ChakraProvider>
      <NavBar/>
    </ChakraProvider>
  </React.StrictMode>,
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App className="App" />
    </ChakraProvider>
  </React.StrictMode>,
)

