
//import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonList from './pages/PokemonList'
import PokemonForm from './componentes/PokemonForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <PokemonList /> } />
        <Route path='/pokemon' element= { <PokemonForm /> } />
        <Route path='/pokemon/:id' element= { <PokemonForm /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
