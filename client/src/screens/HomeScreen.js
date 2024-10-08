import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Summary from "../components/Summary";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ScreenImage from "../components/Header/ScreenImage";

import { fetchPizzaData } from "../store/pizza-action";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzas.pizzas);
  const loading = useSelector((state) => state.pizzas.loading);
  const error = useSelector((state) => state.pizzas.error);

  useEffect(() => {
    dispatch(fetchPizzaData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <ScreenImage />
      <Summary />
      <div className="container py-5">
        {loading && <Loader />}
        {error && <Error error="Something Went Wrong" />}
        <div className="row justify-content-center mx-2">
          {pizzas.map((pizza) => {
            return (
              <div className="col col-md-4 col-sm-6 " key={pizza._id}>
                <Pizza pizza={pizza} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
