import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state here
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            // console.log(existingItem)
            if (existingItem) {
                existingItem.quantity += 1; // Increase the quantity
            } else {
                state.items.push({quantity:1,...action.payload})
            }
            
        },
        removeItem:(state,action)=>{
            const { id } = action.payload;
            const findItem = state.items.find(item => item.id === id);
            if(findItem.quantity>1){
                findItem.quantity-=1
            }else{
                const filteredlist= state.items.filter((item)=>item.id !== id)
                state.items=filteredlist
            } 
   
        },
        clearCart:(state,action)=>{
            state.items.length=0
        }
    }
})

export const selectTotalPrice = state => {
    return state.cart.items.reduce((total, item) => {
        return total + (item.price/100 | item.defaultPrice / 100) * item.quantity;
    }, 0);
};

export const {addItem,removeItem,clearCart} =cartSlice.actions

export default cartSlice.reducer;