
import { Route, Routes } from 'react-router-dom'
import '../src/assets/css/App.css'
import MyNavBar from './components/MyNavBar'
import AppProvider from './context/AppContext'
import Home from './pages/Home'

function App() {
 

  return (
<>
<AppProvider>

<MyNavBar/>
<Routes>
  <Route path='/' element={ <Home/> }/>
  <Route path='pokemon' element={<h1>Pokemon</h1>}/>
  <Route path='buscar' element={<h1>Search Pokemon</h1>}/>
  <Route path='api' element={<h1>API</h1>}/>
  <Route path='contacto' element={<h1>Contacto</h1>}/>
  <Route path='*' element={<h1>:( Pagína no encontrada</h1>}/>

</Routes>
</AppProvider>
</>
  )
}

export default App
