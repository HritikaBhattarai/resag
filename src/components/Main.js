import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';

function Main() {
  const dispatch = useDispatch(); //use of dispatch to send data from react.js to redux action
  let data = useSelector((state)=> state.productData);
  console.warn("data in main component", data);
  const product = {
    name: 'pert',
    category: 'mob',
    price: 2000,
    color: ''
  }

  return (
    <div>
    <button onClick= {()=>dispatch(addToCart(product))}>Add To Cart</button>

    <div>
    <button onClick= {()=>dispatch(removeFromCart(product.name))}>Remove From Cart</button>
    </div>
    
    <div>
    <button onClick= {()=>dispatch(emptyCart(product))}>Empty Cart</button>
    </div>

    <div>
    <button onClick= {()=>dispatch(productList(product))}>Call Product List</button>
    </div>
     </div>  
  );
}

export default Main;
