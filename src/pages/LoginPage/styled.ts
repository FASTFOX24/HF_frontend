import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const LoginTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 64px;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
export const FormBox = styled.form`
display: flex;
flex-direction: column;
`
export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 36px;
`;
export const TextField = styled.input`
  width: 222px;
  height: 12px;
  padding: 12px 16px;
`;
export const ErrorMessage = styled.p`
  position: absolute;
  left: 12px;
  margin-top: 4px;
  font-size: 12px;
  color: red;
`;
export const IconBtn = styled.button`
  font-size: 20px;
  position: absolute;
  right: 0px;
  padding: 10px 16px;
  color: #828282;
  cursor: pointer;
`;
export const VisibleIcon = styled(LuEye)`
  font-size: 20px;
  color: #828282;
`;
export const InvisibleIcon = styled(LuEyeOff)`
  font-size: 20px;
  color: #828282;
`;
export const LoginBtn = styled.input`
  background-color: #ff6300;
  border: 0px;
  border-radius: 16px;
  width: 256px;
  height: 36px;
  color: white;
  font-weight: bold;
`;
export const DividerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 256px;
  margin: 16px 0px;
`;
export const Divider = styled.hr`
  width: 108px;
  border: 0;
  height: 0;
  border-top: 1px solid #9a9a9a;
  border-radius: 12px;
  margin: 24px 0px;
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
