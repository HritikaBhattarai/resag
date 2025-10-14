/*handle data for redux store i.e. update, save, delete get data from action filter out and from store we can get the data to any 
components over the react application. Here if we have more than one reducer but store can only accept one reducer in that case 
combine multiple into one i.e. need rootReducer which will send the data to the store can save, del, update can do anything with the 
help of reducer, if we have data in the store then we can get those in any of the components. Reducer must return some value and 
must have some initial value*/
import { ADD_TO_CART } from "./constant"
export const cartData =(data=[], action)=>{//this action will get the data from action.js
    if (action.type === ADD_TO_CART)
    {
    console.warn("ADD_TO_CART condition", action) 
        return "data"
    }else{
        return "no action called"
    }
}
