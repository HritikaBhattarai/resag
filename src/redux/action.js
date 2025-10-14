/*Whenever we hit an action it will call all the reducers*/
import { ADD_TO_CART } from "./constant" 
export const addToCart =(data)=>{
    console.warn("action is called", data )
    return {
        type: ADD_TO_CART,
        data
    }
}
