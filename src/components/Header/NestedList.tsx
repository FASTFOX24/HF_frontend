import React from "react";
import * as S from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router";
import { push, ref } from "firebase/database";
import uuid from "react-uuid";
import { database, db } from "../../firebase";
import { addDoc, collection, setDoc } from "firebase/firestore";

interface BtnProps {
  btnName: string;
  list: { btnName: string; path: string }[];
}

const NestedList: React.FC<BtnProps> = ({ btnName, list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const pushData = async () => {
    await addDoc(collection(db, "gyms"), {
      image: [
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240213_272%2F1707828958486rE2Xq_JPEG%2F5150.jpg",
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230627_226%2F1687850167417f4gj0_JPEG%2FKakaoTalk_20230627_005548622_24.jpg",
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240213_272%2F1707828958486rE2Xq_JPEG%2F5150.jpg",
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230627_226%2F1687850167417f4gj0_JPEG%2FKakaoTalk_20230627_005548622_24.jpg",
      ],
      name: "5150피트니스",
      price: 120000,
      reviewCount: 104,
      reviewScore: 9.8,
      id: uuid(),
      detail: {
        basicInfo: "asdf",
        priceInfo: "asdfsadf",
        sellerInfo: "asdf",
      },
    });
  };
  const pushReview = async () => {
    await addDoc(collection(db, "reviews"), {
      image: "https://i.stack.imgur.com/frlIf.png",
      displayName: "별똥",
      content: "여기 너무 좋아요~!",
      date: "24년 02월 29일",
      gymId: "b13bdb4c-9625-52ec-2965-6e9075a2f1a3",
    });
  };
  const navList = list.map((btn) => {
    return (
      <S.NavBtn_2
        key={`navBtn_${btn.btnName}`}
        onClick={() => {
          navigate(btn.path);
        }}
      >
        {btn.btnName}
      </S.NavBtn_2>
    );
  });
  return (
    <S.Container>
      <S.NestedList
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <S.btnTitle>{btnName}</S.btnTitle>
        {isOpen ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}
      </S.NestedList>
      {isOpen && navList}
      <button onClick={pushData}>push gym data</button>
      <button onClick={pushReview}>push review data</button>
    </S.Container>
  );
};

export default NestedList;
