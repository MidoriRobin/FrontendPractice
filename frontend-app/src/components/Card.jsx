import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";
import { ReactComponent as HeroDisplay } from "../images/illustration-hero.svg";

// TODO: Complete styling
const Main = styled.div`
  /* Layout */
  display: grid;
  grid-template-rows: 10rem 16rem 9rem;
  height: 35rem;
  width: 21rem;
  margin: 0;

  /* Presentation */
  background-color: white;
  color: var(--neutral-blue-desatur);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-radius: 1rem;
  box-shadow: 9px 9px 5px -7px rgba(0, 0, 0, 0.13);
  -webkit-box-shadow: 9px 9px 5px -7px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 9px 9px 5px -7px rgba(0, 0, 0, 0.13);

  .head {
    font-weight: var(--font-weight-2);
    color: var(--neutral-blue-dark);
  }

  p {
    font-size: 0.8rem;
  }

  /* Media queries */
  @media (min-width: 1440px) {
    grid-template-rows: 11.5rem 16rem 9rem;
    height: 36.5rem;
    width: 24rem;
  }
`;

const BannerCont = styled.div`
  /* Layout */
  width: inherit;
  margin: 0 auto;
  overflow: hidden;

  /* Presentation */
  /* border: 1px solid black; */
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  svg {
    display: inline-block;
    position: relative;
  }

  /* Media queries */
  @media (min-width: 1440px) {
    width: 24rem;
  }
`;

const DetailsCont = styled.div`
  /* Layout */
  display: flex;
  flex-flow: column nowrap;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: center;

  /* Presentation */

  .card-desc {
    font-size: 1rem;
    line-height: 1.5rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
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
  justify-content: start;
  align-items: center;
  height: 4.7rem;
  margin-top: 2rem;

  /* Presentation */
  border-radius: 0.5rem;
  background-color: var(--neutral-blue-vpale);

  img {
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
  }

  p {
    margin: 0;
    text-align: start;
    margin-right: 4rem;
  }

  a {
    font-weight: var(--font-weight-1);
    color: var(--primary-blue-bright);
    font-size: 0.8rem;
    font-weight: var(--font-weight-2);

    :hover {
      opacity: 0.8;
    }
  }
`;

const ButtonCont = styled.div`
  /* Layout */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: inherit;

  /* Presentation */
`;

const Card = (props) => {
  return (
    <Main className="card-cont">
      <BannerCont className="banner-cont">
        <HeroDisplay />
      </BannerCont>
      <DetailsCont className="detail-cont">
        <p className="card-title head">
          {props.title ? props.title : "Order Summary"}
        </p>
        <p className="card-desc">
          {props.desc
            ? props.desc
            : "You can now listen to millions of songs, audiobooks, and podcasts on any \
              device anywhere you like!"}
        </p>
        <MoreInfo className="info-cont">
          <img src="icon-music.svg" alt="music icon" />
          <div>
            <p className="head">{props.info ? props.info : "Annual Plan"}</p>
            <p className="desc">
              {props.details ? props.details : "$59.99/year"}
            </p>
          </div>
          <a href="/">Change</a>
        </MoreInfo>
      </DetailsCont>
      <ButtonCont className="btn-cont">
        <Button width="80%" forward text="Proceed to Payment" />
        <Button width="80%" forward={false} text="Cancel Order" />
      </ButtonCont>
    </Main>
  );
};

export default Card;
