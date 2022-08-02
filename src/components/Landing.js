import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiBlackBook } from "react-icons/gi";
import { HiOutlineBookOpen } from "react-icons/hi";

const LandingStyling = styled.div`
  main {
    border: 7px solid white;
    width: 30%;
    height: 30%;
    margin: 0 auto;
    transform: translateY(80%);
  }
  h1 {
    text-align: center;
    padding: 20%;
    color: white;
    transform: translateY(-10px);
  }
  .noteIcon {
    position: absolute;
    top: 57%;
    left: 46%;
    color: white;
    font-size: 36px;
  }
  nav:hover {
    transition: transform 250ms;
    transform: translateY(-10px);
    color: #fefae0;
  }
`;

const Landing = () => {
  return (
    <LandingStyling>
      <main>
        <nav>
          <Link to="/note" style={{ textDecoration: "none" }}>
            <h1>My Daily Note </h1>
            <HiOutlineBookOpen className="noteIcon" />
          </Link>
        </nav>
      </main>
    </LandingStyling>
  );
};

export default Landing;
