import styled from "styled-components";
import theme from "../../../styles/theme";
import { PiUserCircleFill } from "react-icons/pi";

export const Container = styled.div`
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const Background = styled.div<{ $isOpen: boolean }>`
  width: 100vw;
  height: calc(100vh - 48px);
  background-color: ${({ $isOpen }) => $isOpen && theme.color.gray.G300};
  opacity: 0.5;
`;
export const NavBar = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => !$isOpen && "none"};
  position: absolute;
  top: 48px;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-360px")};
  width: 320px;
  height: calc(100vh - 48px);
  @media (min-width: 768px) {
    width: 360px;
  }
`;
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.primary.OR500};
  padding: 20px 0px;
  @media (min-width: 768px) {
    padding: 24px 0px;
  }
`;
export const LoginCaption = styled.p`
  ${theme.text.body_2}
  text-align: center;
  line-height: 24px;
  color: ${theme.color.gray.white};
  background-color: ${theme.color.primary.OR500};
  @media (min-width: 768px) {
    ${theme.text.body_1}
    line-height: 28px;
  }
`;
export const LoginBtn = styled.button`
  ${theme.text.body_2}
  width: 100px;
  height: 36px;
  border-radius: 99px;
  color: ${theme.color.primary.OR500};
  background-color: ${theme.color.gray.white};
  margin-top: 20px;
  line-height: 24px;
  @media (min-width: 768px) {
    ${theme.text.body_1}
    line-height: 28px;
  }
`;
export const BenefitBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.color.primary.OR700};
  padding: 12px 0px;
  @media (max-width: 767px) {
    padding: 8px 0px;
  }
`;
export const BenfitContent = styled.span`
  ${theme.text.caption_2}
  width: 50%;
  text-align: center;
  color: ${theme.color.gray.white};
  background-color: ${theme.color.primary.OR700};
  @media (min-width: 768px) {
    ${theme.text.caption_1}
  }
`;
export const NavBtn_1 = styled.button<{ onClick: () => void }>`
  ${theme.text.body_2}
  text-align: start;
  width: 100%;
  padding: 20px;
  @media (min-width: 768px) {
    ${theme.text.body_1}
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.color.gray.G300};
  }
`;
export const Divider = styled.hr`
  border-right: 0.5px solid ${theme.color.gray.white};
  height: 24px;
`;
//로그인 후 사용자 프로필
export const ProfileBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserIcon = styled(PiUserCircleFill)`
  font-size: 48px;
  color: ${theme.color.gray.white};
`;
export const DisplayName = styled.span`
  ${theme.text.heading_5}
  color: ${theme.color.gray.white};
`;
