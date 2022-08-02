import React from "react";
import styled from "styled-components";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AppHeadStyle = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #ccd5ae;
  margin-bottom: 15px;
  color: #fefae0;
  h1 {
    font-family: "Paytone One";
    text-transform: uppercase;
    letter-spacing: -2px;
    display: block;
    font-size: 50px;
    line-height: 60px;
    color: #fff;
    font-weight: bold;
    letter-spacing: -3px;
    margin-bottom: 5px;
  }

  .day {
    font-size: 30px;
    line-height: 20px;
    color: #fefae0;
    letter-spacing: -2px;
    margin-bottom: 20px;
  }

  .backIcon {
    position: absolute;
    font-size: 20pt;
    top: 120px;
    left: 40px;
    color: #fff;
    cursor: pointer;
  }
`;

const AppHead = () => {
  const date = new Date();
  const today = date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const day = date.toLocaleDateString("en-CA", {
    weekday: "long",
  });
  return (
    <>
      <AppHeadStyle>
        <nav>
          <Link to="/" style={{ textDecoration: "none" }}>
            <RiArrowGoBackFill className="backIcon" />
          </Link>
        </nav>

        <h1>{today}</h1>
        <div className="day">{day}</div>
      </AppHeadStyle>
    </>
  );
};

export default AppHead;
