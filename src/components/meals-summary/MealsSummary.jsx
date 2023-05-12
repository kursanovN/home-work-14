import React, { memo } from "react";
import styled from "styled-components";
import { MealSummaryCard } from "./MealsSummaryCard";
import baground from "../../assets/images/baground.png";

export const MealSummary = () => {
  return (
    <Container>
      <img src={baground} alt="Food Photos" />
      <MealSummaryCard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 432px;
  margin-top: 101px;

  img {
    width: 100%;
    height: 100%;
  }
`;
