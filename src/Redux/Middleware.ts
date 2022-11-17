import {Store} from "redux";
import { ProductAction, ProductState } from "./ProductsState";
let counter=0;
export function countActions(productStore:any){
    return function (next:Function){
        return function(action:ProductAction){
            console.log(`Current Action: ${action.type}, Total Actions:${++counter}`);
            if(action.type=="AddProduct")
            {
                console.clear();
            }
            next(action);
        }
    }
}