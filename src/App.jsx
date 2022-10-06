
import { Route, Routes } from 'react-router-dom'
import '../src/assets/css/App.css'
import MyNavBar from './components/MyNavBar'
import AppProvider from './context/AppContext'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'
import SearchPokemon from './pages/SearchPokemon'

function App() {
 

  return (
<>
<AppProvider>

<MyNavBar/>
<Routes>
  <Route path='/' element={ <Home/> }/>
  <Route path='pokemon' element={<SearchPokemon/>}/>
  <Route path='pokemon/:id' element={ <PokemonDetail/> }/>
  {/* <Route path='api' element={<h1>API</h1>}/>
  <Route path='contacto' element={<h1>Contacto</h1>}/> */}
  <Route path='*' element={<h1>:( Pagína no encontrada</h1>}/>

</Routes>
</AppProvider>
</>
  )
}

export default App
