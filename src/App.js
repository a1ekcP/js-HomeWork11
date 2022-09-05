import './App.css';
import Products from './components/Products';
import ContextTheme from './context/ContextTheme';
import AlertMessage from './components/AlertMessage';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import FormGroup from './components/FormGroup';
import NotFoundPage from './components/NotFoundPage';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';


function App() {
  const [theme, setTheme] = useState('bg-secondary');
  const [alert, setAlert] = useState([]);
  const [user, setUser] = useState({login: '', email: ''})
  const value = {theme, setTheme, alert, setAlert, user, setUser};


  useEffect(() => {
    let userInStore = localStorage.getItem('LastUser');
    userInStore ? setUser(JSON.parse(userInStore)) : setUser('');
  }, []);

  return (
    <BrowserRouter>
      <ContextTheme.Provider value={value}>

        <div className={`App ${theme}`}>

          <header className="App-header">
            <Container>
              <Navigation/>
            </Container>
          </header>

          <main>
          <Container>
            <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/Products' element={<Products/>}/>
              <Route path='/UserCabinet' element={<FormGroup/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
            <div className='alert-block'>
              <AlertMessage/>
            </div>
          </Container>
          </main>

        </div>

    </ContextTheme.Provider>
    </BrowserRouter>
  );
}

export default App;
