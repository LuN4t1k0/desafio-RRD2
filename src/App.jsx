

import { Route, Routes } from 'react-router-dom'
import '../src/assets/css/App.css'
import MyNavBar from './components/MyNavBar'

function App() {
 

  return (
<>
<MyNavBar/>
<Routes>
  <Route path='/' element={ <h1>Home</h1> }/>
  <Route path='pokemon' element={<h1>Pokemon</h1>}/>
  <Route path='*' element={<h1>:( Pagína no encontrada</h1>}/>

</Routes>
</>
  )
}

export default App
