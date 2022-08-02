import React from "react";
import styled from "styled-components";
import noteImage from "../image/noteImage.jpg";

const ImageStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 20px;
  color: #fff;
`;

const MainImage = () => {
  return (
    <ImageStyle>
      <img src={noteImage} alt="note" />
    </ImageStyle>
  );
};

export default MainImage;
