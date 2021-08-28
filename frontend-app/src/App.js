import "./App.css";
import OrderSummary from "./components/OrderSummary";
import React from "react";
import styled from "@emotion/styled";
import bgMobile from "./images/pattern-background-mobile.svg";
import bgDesktop from "./images/pattern-background-desktop.svg";

const AppWrapper = styled.div`
  /* Layout */
  text-align: center;
  width: 100vw;
  height: 100vh;

  /* Presentation */
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;

  /* TODO: Complete Responsiveness */
  @media (min-width: 1440px) {
    background-image: url(${bgDesktop});
  }
`;

function App() {
  return (
    <AppWrapper className="app-wrapper">
      <OrderSummary />
    </AppWrapper>
  );
}

export default App;
