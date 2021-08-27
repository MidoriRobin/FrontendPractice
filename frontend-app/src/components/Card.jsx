import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";

// TODO: Complete styling
const Main = styled.div`
  /* Layout */
  display: grid;
  grid-template-rows: 1fr 18rem 1fr;
  height: 35rem;
  width: 21rem;
  margin: 0;

  /* Presentation */
  border: solid black 2px;
  border-radius: 1rem;
  color: var(--neutral-blue-desatur);

  .head {
    font-weight: var(--font-weight-1);
    color: var(--neutral-blue-dark);
  }

  /* Media queries */
  @media (min-width: 1440px) {
  }
`;

const BannerCont = styled.div`
  /* Layout */

  /* Presentation */
  border: 1px solid black;
`;

const DetailsCont = styled.div`
  /* Layout */
  display: flex;
  flex-flow: column nowrap;
  padding-left: 1.7rem;
  padding-right: 1.7rem;

  /* Presentation */
  border: 1px solid black;

  .card-desc {
    font-size: 0.9rem;
    font-weight: var(--font-weight-1);
  }

  .card-title {
    margin-top: 1rem;
    margin-bottom: 0.5rem;

    font-size: 1.5rem;
    font-weight: var(--font-weight-2);
  }
`;

const MoreInfo = styled.div`
  /* Layout */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 4.7rem;
  margin-top: 2rem;

  /* Presentation */
  border: 1px solid black;
  border-radius: 0.5rem;

  img {
    width: 3rem;
    height: 3rem;
  }

  p {
    margin: 0;
    text-align: start;
  }

  a {
    font-weight: var(--font-weight-1);
    color: var(--primary-blue-bright);
  }
`;

const ButtonCont = styled.div`
  /* Layout */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  /* Presentation */
  border: 1px solid black;
  overflow: auto;
`;

// TODO: Ensure responsiveness
const Card = (props) => {
  return (
    <Main className="card">
      <BannerCont className="banner-cont">Tings</BannerCont>
      <DetailsCont className="detail-cont">
        <p className="card-title head">{props.title ? props.title : "Title"}</p>
        <p className="card-desc">
          {props.desc
            ? props.desc
            : "lorem gluck gluck ipsum gluck gluck me nuh know wah else fi type yahso \
          gluck gluck. Gaza ave more fans."}
        </p>
        <MoreInfo className="info-cont">
          <img src="icon-music.svg" alt="music icon" />
          <div>
            <p className="head">{props.info ? props.info : "Info"}</p>
            <p className="desc">
              {props.details ? props.details : "lorem ipsum"}
            </p>
          </div>
          <a href="/">Change</a>
        </MoreInfo>
      </DetailsCont>
      <ButtonCont className="btn-cont">
        <Button forward text="Proceed" />
        <Button forward={false} text="Cancel" />
      </ButtonCont>
    </Main>
  );
};

export default Card;
