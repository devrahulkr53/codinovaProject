import { initialState } from "./cart.state";
import { createReducer, on } from '@ngrx/store';
import { addCart, deleteCart, resetCart, updateQuantity } from "./cart.action";
import { Cart } from "./cart.interface";

export const cartReducer = createReducer(
    initialState,
    on(addCart, (state: any, action: Cart) => {
        let arr = JSON.parse(JSON.stringify(state));
        let index = state.findIndex((e:Cart)=>e.id === action.id)
        if(index !== -1){
            arr[index].quantity = arr[index].quantity + 1;
        }
        return index != -1 ? [...arr] : [...state, {...action, quantity: 1}]
    }),
    on(updateQuantity, (state: any, action: Cart) => {
        let arr = JSON.parse(JSON.stringify(state));
        let index = state.findIndex((e:Cart)=>e.id === action.id)
        arr[index] = action;
        return [...arr]
    }),
    on(deleteCart, (state: any, action: Cart) => {
        let index = state.findIndex((e:Cart)=>e.id === action.id)
        return [...state.slice(0, index), ...state.slice(index + 1)]
    }),
    on(resetCart, (state: any) => {
        return []
    }),
);
