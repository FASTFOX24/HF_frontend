import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  @media (max-height: 726px) {
    padding: 48px 0px;
  }
`;
export const Title = styled.h3`
  ${theme.text.display_5}
`;
export const InputContainer = styled.div`
  display: grid;
  grid-gap: 36px;
  width: 312px;
  margin: 48px 0px;
`;
export const JoinBtn = styled.input`
  ${theme.text.heading_5}
  width: 100%;
  height: 48px;
  border-radius: 16px;
  color: ${theme.color.gray.white};
  background-color: ${theme.color.primary.OR500};
`;
export const LoginBox = styled.div`
  display: flex;
  margin-top: 24px;
`;
export const LoginText = styled.span`
  ${theme.text.caption_1}
  color: ${theme.color.gray.G400};
  margin-right: 8px;
`;
export const LoginBtn = styled.a`
  ${theme.text.caption_1}
`;
