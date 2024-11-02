import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Map from './pages/Map';
import PrivateRoute from './components/PrivateRoute';
import AddSpot from './pages/AddSpot';
import AddPricing from './pages/AddPricing';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/home-map' element={<Map />}/>
          <Route path='/add-spot' element={<AddSpot />}/>
          <Route path='/add-pricing/:spotId' element={<AddPricing />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
