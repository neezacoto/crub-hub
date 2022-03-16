import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styles/Global';
import {lightTheme, darkTheme} from './themes'






function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggle = () => {setIsDarkTheme(!isDarkTheme); console.log('hello')}
  return (
    <ThemeProvider theme={(isDarkTheme)? darkTheme : lightTheme}>
    <>
    <GlobalStyles theme={(isDarkTheme)? darkTheme : lightTheme}/>
      <Router>
        <Navbar toggle = {toggle}/>
        <Routes>
          <Route path="/" element={<div>hello world</div>} />
        </Routes>
      </Router>
    
    </>
    </ThemeProvider>
   
  );
}

export default App;
