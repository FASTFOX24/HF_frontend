import theme from "../../styles/theme";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (max-height: 652px) {
    padding: 48px 0px;
  }
`;
export const LoginTitle = styled.p`
  ${theme.text.display_6}
  margin-bottom: 48px;
  @media (min-width: 768px) {
    ${theme.text.display_5}
    margin-bottom: 56px;
  }
`;
export const FormBox = styled.form`
  display: grid;
  grid-gap: 32px;
  width: 312px;
`;
export const LoginBtn = styled.input`
  ${theme.text.heading_4}
  color: ${theme.color.gray.white};
  background-color: ${theme.color.primary.OR500};
  border-radius: 99px;
  height: 48px;
`;
export const DividerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 312px;
  margin: 28px 0px;
`;
export const Divider = styled.hr`
  margin: 0px;
  width: 40%;
  border: 0px;
  border-top: 1px solid ${theme.color.gray.G300};
  border-radius: 12px;
`;
export const DividerText = styled.span`
  ${theme.text.body_2}
  color: ${theme.color.gray.G300};
`;
export const OauthBox = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 312px;
`;
export const AuthBtn = styled.button`
  ${theme.text.heading_4}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 99px;
  &.kakao {
    background-color: ${theme.color.other.yellow};
  }
  &.google {
    border: 1px solid ${theme.color.gray.G300};
  }
`;
export const GoogleIcon = styled(FcGoogle)`
  font-size: 24px;
  margin-right: 12px;
`;
export const KakaoIcon = styled(RiKakaoTalkFill)`
  font-size: 24px;
  margin-right: 12px;
`;

export const JMBox = styled.div`
  display: flex;
  margin-top: 48px;
`;
export const Text_1 = styled.span`
  ${theme.text.body_2}
  color: ${theme.color.gray.G400};
  margin-right: 8px;
`;
export const JMBtn = styled.a`
  ${theme.text.body_2}
  color: ${theme.color.gray.G700};
  text-decoration: underline;
  text-underline-offset: 3px;
`;
