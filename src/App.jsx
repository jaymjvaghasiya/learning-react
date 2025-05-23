import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { MapDemo } from './components/MapDemo'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { matchPath, Route, Routes, useLocation } from 'react-router-dom'
import { HotStarHome } from './components/hotstar/HotStarHome'
import { HotStarMovies } from './components/hotstar/HotStarMovies'
import { HotStarShow } from './components/hotstar/HotStarShow'
import { PlayMovies } from './components/hotstar/PlayMovies'
import { Navbar } from './components/Navbar'
import { Error404 } from './components/Error404'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { UseStateDemo3 } from './components/UseStateDemo3'
import { UseStateDemo4 } from './components/UseStateDemo4'
import { IPLHome } from './components/ipl/IPLHome'
import { FormDemo1 } from './components/form/FormDemo1'
import { FormDemo2 } from './components/form/FormDemo2'
import { AddProduct } from './components/form/AddProduct'
import { FormDemo4 } from './components/form/FormDemo4'
import { FormDemo5 } from './components/form/FormDemo5'
import { UseMemoDemo2 } from './components/UseMemoDemo2'
import { FindBomb } from './components/FindBomb'
import { UseMemoDemo1 } from './components/UseMemoDemo1'
import { ApiDemo1 } from './components/api/ApiDemo1'
import { GetProductApi } from './components/api/GetProductApi'

function App() {
 
  const location = useLocation();
  const validPaths = ['/', '/movies', '/shows', '/playcontent/:id', '/usestatedemo1', 
                      '/usestatedemo2', '/usestatedemo3', '/usestatedemo4', '/ipl', 
                      '/formdemo1', '/formdemo2', '/formdemo4', '/formdemo5', '/addproduct',
                      '/memodemo1', '/memodemo2', '/findbomb', '/apidemo1', '/getproducts'];
  const showNavbar = validPaths.some(path => 
    matchPath({path, end: true}, location.pathname)
  );

  const title = "React JS";
  
  return (
    <>
      {/* <h1>HELLO ALL...</h1> */}
      {/* <MapDemo></MapDemo> */}
      {/* <MapDemo2></MapDemo2> */}
      {/* <MapDemo3></MapDemo3> */}
      {showNavbar && <Navbar title={title}/>}
      <Routes>
        <Route path='/' element={<HotStarHome/>}></Route>
        <Route path='/movies' element={<HotStarMovies/>}></Route>
        <Route path='/shows' element={<HotStarShow/>}></Route>
        <Route path='/playcontent/:id' element={<PlayMovies/>}></Route>
        <Route path='/usestatedemo1' element={<UseStateDemo1/>}></Route>
        <Route path='/usestatedemo2' element={<UseStateDemo2/>}></Route>
        <Route path='/usestatedemo3' element={<UseStateDemo3/>}></Route>
        <Route path='/usestatedemo4' element={<UseStateDemo4/>}></Route>
        <Route path='/ipl' element={<IPLHome/>}></Route>
        <Route path='/formdemo1' element={<FormDemo1/>}></Route>
        <Route path='/formdemo2' element={<FormDemo2/>}></Route>
        <Route path='/formdemo4' element={<FormDemo4/>}></Route>
        <Route path='/formdemo5' element={<FormDemo5/>}></Route>
        {/* <Route path='/memodemo1' element={<UseMemoDemo1/>}></Route>
        <Route path='/memodemo2' element={<UseMemoDemo2/>}></Route> */}
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/findbomb' element={<FindBomb/>}></Route>
        <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
        <Route path='/getproducts' element={<GetProductApi/>}></Route>
        <Route path='/*' element={<Error404/>}></Route>
      </Routes>
    </>
  )
}

export default App
