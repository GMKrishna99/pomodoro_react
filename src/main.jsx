import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import './index.css'
import "./fonts/Poppins-Regular.ttf"
import StateProvider from './components/StateProvider'



const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html, body {
    background-color: ${props => props.theme.colors.bg};
    font-size:62.5%;
    font-family:Poppins-Regular;
  }
  body {
    font-size:1.6rem;
  }
`;

const theme = {
  colors:{
    primary: '#3F72AF',
    secondary: '#112D4E',
    bg:'#DBE2EF',
    third:'#c0c6ce8f',
  }
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
