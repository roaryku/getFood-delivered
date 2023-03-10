import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';



function App() {
  return (
    <div className="App">
        <AllCategories/>
        <Cart/>
        <Dishes/>
    </div>
  );
}

export default App;
