// @ts-nocheck
import styled from "@emotion/styled";
import React from "react";

const ButtonCont = styled.button`
  /* Layout */
  width: ${({ width }) => (width ? width : "inherit")};
  height: 2.7rem;
  margin: 0.5rem 0;

  /* Presentation */
  border: none;
  border-radius: 0.5rem;
  font-weight: var(--font-weight-2);
  cursor: pointer;

  background-color: ${({ forward }) =>
    forward ? "var(--primary-blue-bright)" : "inherit"};

  color: ${({ forward }) =>
    forward ? "var(--neutral-blue-vpale)" : "var(--neutral-blue-dark)"};

  box-shadow: ${({ forward }) =>
    forward ? "0px 11px 15px -1px rgba(0,0,0,0.4)" : "none"};

  :hover {
    opacity: 0.8;
  }
`;

function Button({ forward, text, width }) {
  return (
    <ButtonCont width={width} forward={forward}>
      {text ? text : "Nothing"}
    </ButtonCont>
  );
}

export default Button;
