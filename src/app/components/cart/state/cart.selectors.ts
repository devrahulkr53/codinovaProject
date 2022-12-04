import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Cart } from "./cart.interface";

const getCartState = createFeatureSelector<Cart[]>('cart')

export const getCart = createSelector(getCartState, state => {
    return state;
})
export const getCartCount = createSelector(getCartState, state => {
    return state.length;
})
