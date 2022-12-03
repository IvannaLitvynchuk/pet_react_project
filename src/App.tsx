import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyBooks from './pages/MyBooks';
import Store from './pages/Store';
import Bucket from './pages/Bucket';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/store' element={ <Store /> } />
      <Route path='/my-books' element={ <MyBooks /> } />
      <Route path='/bucket' element={ <Bucket /> } />
    </Routes>
    
  );
}

export default App;
