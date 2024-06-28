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
  @media (min-height: 500px) {
    /* background-color: black; */
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
  grid-gap: 28px;
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
margin : 0px;
  width: 20%;
  border-radius: 12px;
`;
export const DividerText = styled.span`
  color: #9a9a9a;
  font-weight: bold;
  font-size: 12px;
`;
export const OauthBox = styled.div`
  display: flex;
  width: 256px;
  justify-content: space-between;
`;
export const KakaoAuth = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 32px;
  border-radius: 99px;
  font-weight: bold;
  background-color: #fae100;
  text-align: center;
`;
export const KakaoIcon = styled(RiKakaoTalkFill)`
  font-size: 14px;
  margin-right: 4px;
`;
export const GoogleAuth = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 32px;
  border-radius: 99px;
  font-weight: bold;
  border: 1px solid black;
`;
export const GoogleIcon = styled(FcGoogle)`
  font-size: 14px;
  margin-right: 4px;
`;
export const JMBox = styled.div`
  display: flex;
  margin-top: 36px;
`;
export const Text_1 = styled.span`
  color: #828282;
  font-size: 12px;
  margin-right: 8px;
`;
export const JMBtn = styled.a`
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 2px;
`;
