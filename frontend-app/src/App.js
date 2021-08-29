import "./App.css";
import React from "react";
import styled from "@emotion/styled";
import OrderSummary from "./components/OrderSummary";
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
  background-size: 100% 100rem;
  background-color: var(--primary-blue-pale);

  @media (min-width: 1440px) {
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: contain;
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
