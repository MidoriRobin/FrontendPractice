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

const Footer = styled.div``;

function App() {
  return (
    <AppWrapper className="app-wrapper">
      <OrderSummary />
      <Footer>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/MidoriRobin"
          target="_blank"
          rel="noreferrer"
        >
          Christopher Robinson
        </a>
        .
      </Footer>
    </AppWrapper>
  );
}

export default App;
