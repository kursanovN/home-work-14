import React, { useContext } from 'react'
import { ReactComponent as BasketIcon } from '../../assets/icons/Group.svg'
import styled from 'styled-components'
import { cartContext } from '../../store/CartContext'


export const OrderBasket = ({ children, toggleHandler, className }) => {
  
  const { totalAmount } = useContext(cartContext)

  return (
    <Button onClick={toggleHandler} className={className}>
      <BasketIcon /> <OrderBasketTitle>{children}</OrderBasketTitle>
      <OrderBasketCount>{totalAmount}</OrderBasketCount>
    </Button>
  )
}

const Button = styled.button`
  padding: 16px 38px;
  background-color: #5a1f08;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    background-color: #4d1601;
  }

  :active {
    background-color: #993108;
  }
`

const OrderBasketTitle = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 13px;
`

const OrderBasketCount = styled.span`
  background-color: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  margin-left: 24px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
`
