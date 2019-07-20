import React from 'react';
import './styles/app.css'
import Rover from './components/rover'
import Navbar from './components/navbar'
import Cards from './components/cards'
import Asteroid from './components/asteroid'
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import About from './components/about'
function App()
{
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Route path = '/' exact component = {Cards} />
      <Route path = '/Mars' component = {Rover} />
      <Route path = '/Asteroid' component = {Asteroid} />
      <Route path = '/About' component = {About} />
    </div>

    </BrowserRouter>
  );
}

export default App;

