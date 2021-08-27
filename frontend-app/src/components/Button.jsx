// @ts-nocheck
import styled from "@emotion/styled";
import React from "react";

// TODO: add responsiveness
const ButtonCont = styled.button`
  /* Layout */
  width: 17rem;
  height: 2.7rem;
  margin: 0.5rem 0;

  /* Presentation */
  border: none;
  border-radius: 0.5rem;
  font-weight: var(--font-weight-2);

  background-color: ${({ forward }) =>
    forward ? "var(--primary-blue-bright)" : "inherit"};
  color: ${({ forward }) =>
    forward ? "var(--neutral-blue-vpale)" : "inherit"};

  box-shadow: ${({ forward }) =>
    forward ? "0px 11px 15px -1px rgba(0,0,0,0.4)" : "none"};
`;

function Button({ forward, text }) {
  return <ButtonCont forward={forward}>{text ? text : "Nothing"}</ButtonCont>;
}

export default Button;
