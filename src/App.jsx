import { HashRouter, Routes, Route, } from 'react-router-dom';
import './App.css'
// import './index.css'
// se importan estos hooks para usar el boton onClick (useDispatch) y para mostrar en componentes (useSelector)
// import { increment } from './store/slices/counter.slice';
import Character from './components/Character';
import CharacterDetails from './components/CharacterDetails';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './components/Home';

function App() {
/////// *FORMA DE EJECUTAR EL DISPATCH: *
  // const dispatch = useDispatch();

// const userDispatch = () =>{
//   dispatch(increment())}

//////// *FORMA DE EJECUTAR UN useSelector*

//////
  return (
    <div className="App">
     <HashRouter>
      {/* Aquí si se puede y se visualizaría para todos los componentes con path="" */}
      {/* forma de ejecutar ese cambio de estado en todos los componentes de APP */}
      
      {/* forma de llamar con un boton el cambio de estado usado en el slice counter */}
    
     <Routes>
    
      {/* Entre ROUTES Y Route no colocar ningún dato */}
      <Route path='/' element={<Home></Home>}></Route>
      
      <Route element={<ProtectedRoutes/>}>
      <Route path='/character' element={<Character/>}/>
      <Route path='/character/:id' element={<CharacterDetails/>}/>
      </Route>

     </Routes>
      {/* <button onClick={userDispatch}>press</button> */}
     </HashRouter>
    </div>
  )
}

export default App
