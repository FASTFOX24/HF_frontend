import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SortedBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d1d1d1;
  border-radius: 16px;
  padding: 8px 12px 8px 20px;
  width: 120px;
`;
export const SelectedText = styled.span`
  margin-right: 4px;
`;
export const ArrowDown = styled(IoIosArrowDown)`
  font-size: 16px;
`;
export const ArrowUp = styled(IoIosArrowDown)`
  transform: rotate(180deg);
  font-size: 16px;
`;
export const BtnList = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 308px;
  display: flex;
  flex-direction: column;
  border: 2px solid #d1d1d1;
  border-radius: 16px;
  width: 116px;
  background-color: white;
`;
export const SortBtn = styled.button`
  padding: 8px;
  border-bottom: 2px solid #d1d1d1;

  &:last-child {
    border-bottom: 0px;
  }
`;
