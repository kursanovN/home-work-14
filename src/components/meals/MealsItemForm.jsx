import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { ReactComponent as AddPluss } from "../../assets/icons/Addpluss.svg";

export const MealsItemForm = ({ id, onAdd }) => {
  const [amount, setAmount] = useState(1);

  const changeHandler = (e) => {
    setAmount(e.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    onAdd(amount);
  };

  return (
    <Form>
      <InputContainer>
        <label htmlFor={id}>Amount</label>

        <input
          type="number"
          value={amount}
          onChange={changeHandler}
          id={id}
          min={1}
        />
      </InputContainer>
      <Button onClick={addItemHandler}>
        <AddPluss /> Add
      </Button>
    </Form>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-right: 20px;
  }
  input {
    box-sizing: border-box;
    width: 60px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 4px 11px 4px 12px;
    border: 1px solid #d6d6d6;
    outline: none;
    border-radius: 6px;
    width: 60px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
