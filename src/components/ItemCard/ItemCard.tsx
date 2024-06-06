import React from "react";
import * as S from "./styled";
import { addComma } from "../../utils/etc";
import { useNavigate } from "react-router";
interface CardProps {
  gymData: {
    image: string;
    name: string;
    price: number;
    reviewCount: number;
    reviewScore: number;
    id: string;
  };
}
const ItemCard = ({ gymData }: CardProps) => {
  const navigate = useNavigate();
  const clickGymCard = () => {
    navigate(`/detail_gym/${gymData.id}`);
  };
  return (
    <S.CardContainer onClick={clickGymCard}>
      <S.GymImage src={gymData.image} />
      <S.InfoBox>
        <S.InfoLine>
          <S.Text id="info_name" className="white bold">
            {gymData.name}
          </S.Text>
          <S.PriceBox>
            <S.Text className="white bold">{addComma(gymData.price)}</S.Text>
            <S.Text className="white">원 / 월</S.Text>
          </S.PriceBox>
        </S.InfoLine>
        <S.InfoLine className="infoline_2">
          <S.Text className="white small">대화역 | 도보 5분</S.Text>
          <S.Text className="highlight">{`${gymData.reviewScore}추천해요(${gymData.reviewCount})`}</S.Text>
        </S.InfoLine>
      </S.InfoBox>
    </S.CardContainer>
  );
};

export default ItemCard;
