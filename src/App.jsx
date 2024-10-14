import React from 'react'
import './App.css';
import Layout from './component/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index  element={<Home/>}/> 
      <Route path='/:slug' element={<Details/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;
