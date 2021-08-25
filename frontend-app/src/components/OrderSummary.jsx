import React, { useState } from "react";

const OrderSummary = (props) => {
  const [propState, setPropState] = useState(props);

  function getTitle() {
    return "Title";
  }

  return <div>OrderSummary</div>;
};

export default OrderSummary;
