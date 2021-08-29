import styled from "@emotion/styled";
import React, { useState } from "react";
import Card from "./Card";

const OrderWrap = styled.div`
  /* Layout */
  display: flex;
  max-width: 90%;
  height: 97vh;

  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  /* Presentation */
`;

const OrderSummary = (props) => {
  const [propState, setPropState] = useState(props);

  return (
    <OrderWrap className="order-wrapper">
      <Card />
    </OrderWrap>
  );
};

export default OrderSummary;
