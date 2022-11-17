import { Action } from "@remix-run/router";
import { applyMiddleware, compose, createStore } from "redux";
import ProductModel from "../Components/Models/ProductModel/ProductModel";

import {logger} from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { countActions } from "./Middleware";

export class ProductState{
    public products:ProductModel[]=[];
}

export enum ProductActionType{
    
    FetchProduct="FetchProduct",
    AddProduct="AddProduct",
    UpdateProduct="UpdateProduct",
    DeleteProduct="DeleteProduct",

}

export function FetchProduct(product:ProductModel):ProductAction{
    return {type: ProductActionType.FetchProduct, payload:product}
}
export function AddProduct(product:ProductModel):ProductAction{
    return {type: ProductActionType.AddProduct, payload:product}
}
export function UpdateProduct(product:ProductModel):ProductAction{
    return {type: ProductActionType.UpdateProduct, payload:product}
}
export function DeleteProduct(product:ProductModel):ProductAction{
    return {type: ProductActionType.DeleteProduct, payload:product}
}

export interface ProductAction{
    type: ProductActionType;
    payload: any;
}

export function productsReducer(currentState = new ProductState(), action: ProductAction): ProductState{

    const newState = {...currentState};
    
    switch (action.type){
        case ProductActionType.FetchProduct:
            newState.products = action.payload;
            break;
        case ProductActionType.AddProduct:
            console.log(action.payload)
            newState.products.push(action.payload);
            break;
        case ProductActionType.UpdateProduct:
            const indexToUpdate = newState.products.indexOf(action.payload.id);
            if (indexToUpdate>=0) newState.products[indexToUpdate] = action.payload;
            break;
        case ProductActionType.DeleteProduct:
            const indexToDelete = newState.products.indexOf(action.payload.id);
            if (indexToDelete>=0) newState.products.splice(indexToDelete,1);
            break;
    }

    return newState;
}

// export const store = createStore(productsReducer,   applyMiddleware(logger));
export const store = createStore(productsReducer, compose( composeWithDevTools(),applyMiddleware(logger,countActions)));