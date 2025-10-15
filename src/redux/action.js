/*Whenever we hit an action it will call all the reducers*/
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from "./constant" 
export const addToCart =(data)=>{
    console.warn("action is called", data )
    return {
        type:ADD_TO_CART,
        data
    }
}
 
export const removeFromCart =(data)=>{
    console.warn("remove", data)
    return{
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart =() =>{
    console.warn("clear")
    return{
        type:EMPTY_CART

    }
}
