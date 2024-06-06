import React, { useState } from "react";
import * as S from "./styled";
interface selectBoxProps {
  sortList: { btnName: string; sortName: string }[];
}
const SelectBox = ({ sortList }: selectBoxProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sortBtns = sortList.map((btn) => {
    return (
      <S.SortBtn key={`sortBtn_${btn.btnName}`} onClick={() => {}}>
        {btn.btnName}
      </S.SortBtn>
    );
  });
  return (
    <S.SelectBoxContainer>
      <S.SortedBtn
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <S.SelectedText>낮은 가격순</S.SelectedText>
        {isOpen ? <S.ArrowUp /> : <S.ArrowDown />}
      </S.SortedBtn>
      {isOpen && <S.BtnList $isOpen={isOpen}>{sortBtns}</S.BtnList>}
    </S.SelectBoxContainer>
  );
};

export default SelectBox;
