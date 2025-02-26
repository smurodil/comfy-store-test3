import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: defaultState,
    reducers: {
        addItem: (state, { payload }) => {
            const { product } = payload;

            const item = state.cartItems.find((i) => i.cartID === product.cartID);

            if(item){
                item.amount += product.amount;
            }else{
                state.cartItems.push(product)
            }

            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem("cart", JSON.stringify(state));
            toast.success("Item added to cart")
        },
        clearCart: (state) => {},
        removeItem: (state, action) => {},
        editItem: (state, {payload}) => {},
    }
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;