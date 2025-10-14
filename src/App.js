import './App.css';
import { addToCart } from './redux/action';
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch(); //use of dispatch to send data from react.js to redux action
  const product = {
    name: 'per',
    category: 'mob',
    price: 2000,
    color: 'blue'
  }
  return (
    <div className="App">
    <button onClick= {()=>dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default App;
