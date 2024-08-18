import React from "react";
import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export default function CartComponent({ item }) {
  const dispatch = useDispatch();

  const plusHandler = () => {
    dispatch(
      cartActions.addToCart({ pizza: item, varient: item.varient, quantity: 1 })
    );
  };

  const minusHandler = () => {
    if (item.quantity !== 1) {
      dispatch(
        cartActions.addToCart({
          pizza: item,
          varient: item.varient,
          quantity: -1,
        })
      );
    } else {
      dispatch(
        cartActions.removeFromCart({ _id: item._id, varient: item.varient })
      );
    }
  };
  const deleteHandler = () => {
    dispatch(
      cartActions.removeFromCart({ _id: item._id, varient: item.varient })
    );
  };

  return (
    <div className="flex-container text-center pt-2">
      <div className="ml-1 my-2 w-100">
        <img
          src={item.image}
          className="rounded"
          style={{ height: "80px", width: "80px" }}
          alt=""
        />
      </div>
      <div className="text-start m-1 w-100">
        <h1>
          {item.name} [{item.varient}]
        </h1>
        <h1>
          Price : {item.quantity} * {item.prices[0][item.varient]} ={" "}
          {item.price}
        </h1>
        <h1 className="d-inline">Quantity :</h1>
        <i
          className="fa fa-plus text-success mx-2 border p-2 rounded"
          aria-hidden="true"
          style={{ cursor: "pointer" }}
          onClick={plusHandler}
        ></i>
        <b>{item.quantity}</b>
        <i
          className="fa fa-minus text-danger mx-2 border p-2 rounded"
          aria-hidden="true"
          style={{ cursor: "pointer" }}
          onClick={minusHandler}
        ></i>
        <hr />
      </div>

      <div className="m-1 w-100">
        <i
          className="fa fa-trash text-danger mt-4 border p-2 rounded"
          style={{ fontSize: "25px", cursor: "pointer" }}
          aria-hidden="true"
          onClick={deleteHandler}
        ></i>
      </div>
    </div>
  );
}
