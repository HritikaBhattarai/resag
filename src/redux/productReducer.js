import { PRODUCT_LIST } from "./constant"

export const productData =(data = [], action) => {//this action will get the data from action.js
    switch (action.type){
        case PRODUCT_LIST:
            console.warn("PRODUCT_LIST condition", action) 
            return [action.data];    
            
            default:
                return data

}
}