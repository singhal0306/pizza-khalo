import { createSlice } from "@reduxjs/toolkit"

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        loading: false,
        pizzas: [],
        error: false
    },
    reducers:{
        getPizzasRequest(state, action) {
            state.loading = true;
        },
        getPizzasSuccess (state, action){
            state.pizzas = action.payload.pizzas;
            state.loading= false;
        },
        getPizzasFail(state, action){
            state.error = true;
            state.loading= false;
        }
    }
})

export const pizzaAction = pizzaSlice.actions;
export default pizzaSlice.reducer