import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Divider = () => {
  return (
    <Container>
      <DividerBody />
      <DividerText></DividerText>
      <DividerBody />
    </Container>
  );
};

export default Divider;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 312px;
  margin: 28px 0px;
`;
const DividerBody = styled.hr`
  margin: 0px;
  width: 40%;
  border: 0px;
  border-top: 1px solid ${theme.color.gray.G300};
  border-radius: 12px;
`;
const DividerText = styled.span`
  ${theme.text.body_2}
  color: ${theme.color.gray.G300};
`;
