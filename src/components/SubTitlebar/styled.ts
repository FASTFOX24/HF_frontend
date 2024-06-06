import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const SubTitlebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 52px 0px;
  background-color: #ff6300;

`;
export const SubTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;
export const AreaSelectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 240px;
  height: 36px;
  margin-top: 20px;
  padding: 0px;
  border-radius: 8px;
  background-color: #ff8c44;
`;
export const AreaText = styled.span`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
export const arrowIcon = styled(IoIosArrowForward)`
  margin: 0px 8px;
  font-size: 16px;
  color: white;
`;
