import styled from "@emotion/styled";
import React, { useState } from "react";
import Card from "./Card";

const OrderWrap = styled.div`
  /* Layout */
  display: flex;
  max-width: 90%;
  height: 100vh;

  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 1170px) {
    max-width: 1170px;
  }

  /* Presentation */
`;

const OrderSummary = (props) => {
  // TODO: initialize dummy state
  const [propState, setPropState] = useState(props);

  function getTitle() {
    return "Title";
  }

  return (
    <OrderWrap className="order-wrapper">
      <Card />
    </OrderWrap>
  );
};

export default OrderSummary;
