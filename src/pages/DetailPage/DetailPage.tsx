import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Header from "../../components/Header/Header";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import { gymData } from "../../utils/globalData";
import InfoDrawer from "../../components/InfoDrawer/InfoDrawer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
type gym = {
  image: string[];
  name: string;
  price: number;
  reviewCount: number;
  reviewScore: number;
  id: string;
};

const DetailPage = () => {
  const { id } = useParams();
  const [imageNum, setImageNum] = useState(0);
  const [gym, setGym] = useRecoilState<gym>(gymData);
  const imageList = gym.image.map((image, idx) => {
    return (
      <S.SubImage
        key={`image_gym_${idx}`}
        src={image}
        onClick={() => {
          setImageNum(idx);
        }}
        $imageNum={imageNum}
        idx={idx}
      />
    );
  });
  const changeImage = (num: number) => {
    if (num >= 0 && num <= 3) {
      setImageNum(num);
    } else if (num === -1) {
      setImageNum(3);
    } else {
      setImageNum(0);
    }
  };
  useEffect(() => {
    if (id) {
      (async () => {
        const gymQuery = query(collection(db, "gyms"), where("id", "==", id));
        const querySnapshot = await getDocs(gymQuery);
        querySnapshot.forEach((doc) => {
          setGym(doc.data() as gym);
        });
      })();
    }
  }, []);
  return (
    <S.PageContainer>
      <Header />
      <S.MainImage src={gym.image[imageNum]} />
      <S.ImageBox>
        <S.LeftArrow
          onClick={() => {
            changeImage(imageNum - 1);
          }}
        />
        {imageList}
        <S.RightArrow
          onClick={() => {
            changeImage(imageNum + 1);
          }}
        />
      </S.ImageBox>
      <S.InfoBox>
        <h1>{gym.name}</h1>
        <S.reviewBox>
          <S.Text className="review_score">{gym.reviewScore}</S.Text>
          <S.Text className="review">만족해요</S.Text>
          <S.Text className="review_count">리뷰 {gym.reviewCount}개</S.Text>
        </S.reviewBox>
        <S.Text className="address">경기 고양시 일산서구 중앙로 1564</S.Text>
      </S.InfoBox>
      <InfoDrawer gymId={id as string} />
    </S.PageContainer>
  );
};

export default DetailPage;
