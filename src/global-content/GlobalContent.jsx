import { useState } from "react";
import { Header } from "../components/header/Header";
import { MealSummary } from "../components/meals-summary/MealsSummary";
import { Meals } from "../components/meals/Meals";
import { Basket } from "../components/basket/Basket";

export const GlobalContent = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  
  return (
    <>
    

      <Header toggleHandler={toggleHandler} />
      <MealSummary />
      <Meals />
      {toggle && <Basket toggleHandler={toggleHandler} />}
    </>
  );
};
