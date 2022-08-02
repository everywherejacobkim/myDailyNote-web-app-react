import React from "react";
import styled from "styled-components";
import { BiCopyright } from "react-icons/bi";

const FooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 20px;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <BiCopyright /> &nbsp; 2022 My-Daily-Note by &nbsp;{" "}
      <b>Jacob Namhyung Kim</b>. All Rights Reserved.
    </FooterStyle>
  );
};

export default Footer;
