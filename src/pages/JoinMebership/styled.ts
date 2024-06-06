import styled from "styled-components";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
export const PageTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 64px;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 36px;
`;
export const TextArea = styled.input`
  height: 12px;
  padding: 12px;
  &.nomalBtn {
    width: 230px;
  }
  &.checkBtn {
    width: 166px;
    padding-right: 76px;
  }
  &.inbisible {
    width: 194px;
    padding-right: 48px;
  }
`;
export const doubleCheckBtn = styled.button`
  position: absolute;
  border: 1px solid black;
  border-radius: 16px;
  font-size: 12px;
  padding: 4px 8px;
  top: 7px;
  right: 9px;
  &.checked {
    border: 0px;
    background-color: #42c75a;
    color: white;
  }
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
export const JoinBtn = styled.input`
  background-color: #ff6300;
  border: 0px;
  border-radius: 99px;
  width: 256px;
  height: 36px;
  color: white;
  font-weight: bold;
`;
export const LoginBox = styled.div`
  display: flex;
  margin-top: 48px;
`;
export const LoginText = styled.span`
  font-size: 12px;
  color: #828282;
  margin-right: 8px;
`;
export const LoginBtn = styled.a`
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 2px;
`;
export const ErrorMessage = styled.p`
  position: absolute;
  left: 12px;
  margin-top: 4px;
  font-size: 12px;
  color: red;
`;
