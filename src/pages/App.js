import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './home';
import Detail from './details';
import '../styles/App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/details/:mal_id' element={<Detail />}/>
      </Route>
  </Routes>
  )
}

export default App;
