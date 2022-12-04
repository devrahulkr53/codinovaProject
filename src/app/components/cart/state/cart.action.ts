import { createAction, props } from "@ngrx/store";
import { Cart } from "./cart.interface";

export const addCart = createAction('addCart', props<Cart>())
export const updateQuantity = createAction('updateQuantity', props<Cart>())
export const deleteCart = createAction('deleteCart', props<Cart>())
export const resetCart = createAction('resetCart')