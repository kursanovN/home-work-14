import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MealItem } from "./MealsItem";
// import { meals } from "../../utils/Constants";
import { fetchRequest } from "../../lib/fetchAPI";
import { useSortData } from "../../hooks/Sort";
import { Button } from "../UI/Button";

export const Meals = () => {
  const [meals, setMeals] = useState();
  const { sortData, sort } = useSortData(meals);

  async function getFoods() {
    try {
      const response = await fetchRequest("/foods");
      setMeals(response);
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <Container>
      <Card>
        <ContainerButton>
          <Button onClick={() => sort("ASC")}>ASC</Button>
          <Button onClick={() => sort("DESC")}>DEC</Button>
        </ContainerButton>
        {sortData?.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 135px;
  margin-bottom: 100px;
`;
const Card = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 16px;
  max-width: 64.9375rem;
  margin: 0px auto;
`;
const ContainerButton = styled.div`
  display: flex;
`;
