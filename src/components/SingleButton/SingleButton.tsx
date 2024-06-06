import React from "react";
import styled from "styled-components";

interface ButtonProps {
  buttonName: string;
}
const SingleButton = ({ buttonName }: ButtonProps) => {
  return (
    <ButtonContainer>
      <ButtonName>{buttonName}</ButtonName>
    </ButtonContainer>
  );
};

export default SingleButton;

const ButtonContainer = styled.button`
  margin-left: 8px;
  border: 2px solid #d1d1d1;
  border-radius: 16px;
  padding: 8px 16px;
`;
const ButtonName = styled.span``;
