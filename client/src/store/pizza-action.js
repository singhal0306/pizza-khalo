import { pizzaAction } from "./pizzaSlice";
import axios from "axios"

export const fetchPizzaData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            dispatch(pizzaAction.getPizzasRequest())
            const response = await axios.get("/api/pizzas/getallpizzas");
            const data = await response.data;
            return data;
        }
        try {
            const pizzaData = await fetchData();
            dispatch(pizzaAction.getPizzasSuccess({
                pizzas: pizzaData,
            }))
        } catch (error) {
            console.log(error);
            dispatch(pizzaAction.getPizzasFail({
                error: error
            }))
        }
    }
}
