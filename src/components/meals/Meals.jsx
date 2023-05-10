import React from "react";
import styled from "styled-components";
import { MealItem } from "./MealsItem";
import { meals } from "../../utils/Constants";

export const Meals = () => {
  return (
    <Container>
      <Card>
        {meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
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
