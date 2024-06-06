import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

type infoDataProps = {
  gymId: string;
};
type review = {
  image: string;
  displayName: string;
  content: string;
  date: string;
};
const infoBtns = [
  { info: "basicInfo", title: "기본정보" },
  { info: "priceInfo", title: "요금정보" },
  { info: "sellerInfo", title: "판매자 정보" },
];
const InfoDrawer = ({ gymId }: infoDataProps) => {
  const [currentNav, setCurrentNav] = useState<string>("상세정보");
  const [detailInfoNav, setDetailInfoNav] = useState<string>("기본정보");
  const [reviews, setReviews] = useState<review[]>([]);
  const drawerBtns = infoBtns.map((info, idx) => {
    return (
      <S.InfoBox
        key={`drawer_${idx}`}
        $infoname={"상세정보"}
        $currentnav={currentNav}
      >
        <S.Drawer>
          <S.Title>{info.title}</S.Title>
          {detailInfoNav === info.title ? (
            <S.ArrowUp
              onClick={() => {
                setDetailInfoNav("");
              }}
            />
          ) : (
            <S.ArrowDown
              onClick={() => {
                setDetailInfoNav(info.title);
              }}
            />
          )}
        </S.Drawer>
        <S.DetailInfoBox $detailInfoNav={detailInfoNav} data={info.title}>
          asdf
        </S.DetailInfoBox>
      </S.InfoBox>
    );
  });
  const reiews = reviews.map((review, idx) => {
    return (
      <S.InfoBox
        key={`review_${idx}`}
        $infoname={"리뷰"}
        $currentnav={currentNav}
      >
        <S.Review>
          <S.UserDataBox>
            <S.UserImg src={review.image} />
            <S.DisplayName>{review.displayName}</S.DisplayName>
          </S.UserDataBox>
          <S.Content>{review.content}</S.Content>
          <S.Data>{review.date}</S.Data>
        </S.Review>
      </S.InfoBox>
    );
  });
  useEffect(() => {
    (async () => {
      console.log(gymId)
      const gymQuery = query(
        collection(db, "reviews"),
        where("gymId", "==", gymId)
      );
      const querySnapshot = await getDocs(gymQuery);
      const reviewDatas: review[] = [];
      querySnapshot.forEach((doc) => {
        reviewDatas.push(doc.data() as review);
      });
      console.log(reviewDatas)
      setReviews([...reviewDatas]);
    })();
  }, []);
  return (
    <S.Container>
      <S.NavBox $navlength={2}>
        <S.NavButton
          $currentnav={currentNav}
          $btnName={"상세정보"}
          onClick={() => {
            setCurrentNav("상세정보");
          }}
        >
          상세정보
        </S.NavButton>
        <S.NavButton
          $currentnav={currentNav}
          $btnName={"리뷰"}
          onClick={() => {
            setCurrentNav("리뷰");
          }}
        >
          리뷰
        </S.NavButton>
      </S.NavBox>
      {drawerBtns}
      {reiews}
      {currentNav === "리뷰" && (
        <S.MoreBtn>
          더보기
          <S.ArrowDown />
        </S.MoreBtn>
      )}
    </S.Container>
  );
};

export default InfoDrawer;
