import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Ejercicio1 from './componentes/Ejercicio1';
import Ejercicio2 from './componentes/Ejercicio2';
import Inicio from './componentes/Inicio';
function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className='ops'>
          <Link to="/" className='btn btn-success op'>
            Inicio
          </Link>
          <Link to="/ejercicio1" className='btn btn-success op'>
            Ejercicio 1
          </Link>
          <Link to="/ejercicio2" className='btn btn-success op'>
            Ejercicio 2
          </Link>
        </div>
        <hr/>
        <Routes>
          <Route path="/" element={<Inicio />}>
          </Route>
          <Route path="/ejercicio1" element={<Ejercicio1 />}>
          </Route>
          <Route path="/ejercicio2" element={<Ejercicio2 />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
