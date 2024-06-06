import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router";
interface paginationProps {
  currentPage: number;
  page: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const Pagination = ({ currentPage, page, setCurrentPage }: paginationProps) => {
  const navigate = useNavigate();
  const changePage = (idx: number) => {
    setCurrentPage(idx + 1);
    navigate(`/list_gym?page=${idx+1}`)
  };
  const paginationBtns = Array.from({ length: page }, (_, idx) => (
    <S.NumberBtn
      key={`paginationBtn_${idx + 1}`}
      currentpage={currentPage}
      value={idx + 1}
      onClick={() => {
        changePage(idx);
      }}
    >
      {idx + 1}
    </S.NumberBtn>
  ));
  return (
    <S.PaginationContainer>
      <S.ArrowLeft />
      {paginationBtns}
      <S.ArrowRight />
    </S.PaginationContainer>
  );
};

export default Pagination;
