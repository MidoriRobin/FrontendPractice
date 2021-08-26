import styled from "@emotion/styled";
import React from "react";

// TODO: Complete styling
const Main = styled.div`
  /* Layout */
  height: 17rem;
  width: 100%;
  margin: 0;

  /* Presentation */
  border: solid black 2px;
  border-radius: 2px;
`;

// TODO: Add styling for other sections

const Card = () => {
  return <Main className="card">Tings</Main>;
};

export default Card;
