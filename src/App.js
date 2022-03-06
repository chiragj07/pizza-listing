import './App.css'
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import PizzasScreen from './screens/Pizzas/PizzasScreen';
import CartScreen from './screens/Cart/CartScreen';
import Navbar from './Components/Navbar/Navbar';
function App() {
 
  return (
    <div className="App">
       <Router>
          <Navbar />
         <Routes>
           <Route path='/' element ={< PizzasScreen/>} exact />
           <Route path='/cart' element ={< CartScreen/>} exact />

         </Routes>
       </Router>
    </div>
  );
}

export default App;
