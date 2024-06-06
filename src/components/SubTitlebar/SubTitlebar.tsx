import React from "react";
import * as S from "./styled";

interface Props {
  title: string;
  button: boolean;
}
const SubTitleBar = ({ title, button }: Props) => {
  return (
    <S.SubTitlebarContainer>
      <S.SubTitle>{title}</S.SubTitle>
      {button ? (
        <S.AreaSelectButton>
          <S.AreaText>고양시</S.AreaText>
          <S.arrowIcon />
          <S.AreaText>일산 / 파주 / 운정</S.AreaText>
        </S.AreaSelectButton>
      ) : (
        <></>
      )}
    </S.SubTitlebarContainer>
  );
};

export default SubTitleBar;
