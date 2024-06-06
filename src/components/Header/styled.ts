import styled from "styled-components";
import theme from "../../styles/theme";
import { IoIosArrowDown } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";

export const HeaderContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  //이후에 삭제 필요.
  flex-direction: column;
`;
export const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 48px;
  padding: 0px 12px 0px 24px;
  @media (min-width: 1280px) {
    height: 56px;
  }
`;
export const Health = styled.span`
  ${theme.text.heading_4}
  font-weight: 900;
  @media (min-width: 1280px) {
    ${theme.text.heading_2}
    font-weight: 900;
  }
`;
export const Friend = styled.span`
  ${theme.text.body_1}
  color: ${theme.color.primary.OR500};
  @media (min-width: 1280px) {
    ${theme.text.heading_3}
  }
`;
export const NavBar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 64px;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-360px")};
  display: flex;
  flex-direction: column;
  width: 360px;
  height: calc(100vh - 64px);
  z-index: 1000;
  background-color: #d1d1d1;
  transition: left 0.3s ease;
  @media (max-width: 767px) {
    width: 240px;
  }
`;
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 136px;
  background-color: #ff6300;
  @media (max-width: 767px) {
    height: 92px;
  }
`;
export const TextBox_1 = styled.p`
  text-align: center;
  line-height: 24px;
  color: white;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
export const LoginBtn = styled.a`
  color: white;
  margin-top: 16px;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  @media (max-width: 767px) {
    margin-top: 8px;
    font-size: 12px;
  }
`;
export const ProfileBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserIcon = styled(PiUserCircleFill)`
  font-size: 48px;
  color: white;
`;
export const DisplayName = styled.span`
  color: white;
  font-size: 16px;
`;
export const CouponBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 68px;
  width: 100%;
  background-color: #b54600;
  @media (max-width: 767px) {
    height: 44px;
  }
`;
export const TextBox_2 = styled.p`
  text-align: center;
  line-height: 20px;
  color: white;
  font-size: 12px;
  width: 50%;
  @media (max-width: 767px) {
    font-size: 8px;
  }
`;
export const NavBtn_1 = styled.button<{ onClick: () => void }>`
  width: 100%;
  height: 56px;
  background-color: white;
  margin-bottom: 1px;
  text-align: start;
  padding: 16px;
  font-size: 16px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NestedList = styled.button<{ onClick: () => void }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: white;
  padding: 16px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
export const btnTitle = styled.span`
  font-size: 16px;
`;
export const ArrowDownIcon = styled(IoIosArrowDown)`
  font-size: 20px;
`;
export const ArrowUpIcon = styled(IoIosArrowDown)`
  transform: rotate(180deg);
  font-size: 20px;
`;
export const NavBtn_2 = styled.button`
  width: 100%;
  height: 56px;
  background-color: white;
  text-align: start;
  padding: 16px 36px;
  font-size: 16px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
export const Divider = styled.hr`
  border-right: 0.5px solid white;
  height: 24px;
  margin: 0;
`;
