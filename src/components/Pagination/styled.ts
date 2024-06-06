import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;
export const ArrowLeft = styled(IoIosArrowDown)`
  transform: rotate(90deg);
  font-size: 20px;
  margin-right: 24px;
`;
export const ArrowRight = styled(IoIosArrowDown)`
  transform: rotate(270deg);
  font-size: 20px;
  margin-left: 24px;
`;
export const NumberBtn = styled.button<{ currentpage: number; value: number }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  font-size: 16px;
  margin: 0px 8px;
  color: ${(props) => props.currentpage === props.value && "white"};
  background-color: ${(props) =>
    props.currentpage === props.value && "#ff6300"};
  &:hover {
    background-color: ${(props) =>
      props.currentpage !== props.value && "#F6F3F3"};
  }
`;
