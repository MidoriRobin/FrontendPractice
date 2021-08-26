import "./App.css";
import OrderSummary from "./components/OrderSummary";
import React from "react";
import styled from "@emotion/styled";

const AppWrapper = styled.div`
  /* TODO: remove text align */
  /* Layout */
  text-align: center;
  width: 100vw;
  height: 100vh;

  /* Presentation */
`;

function App() {
  return (
    <AppWrapper className="app-wrapper">
      <OrderSummary />
    </AppWrapper>
  );
}

export default App;
