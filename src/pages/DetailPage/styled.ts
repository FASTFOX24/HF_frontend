import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainImage = styled.img<{ src: string }>`
  width: 512px;
  aspect-ratio: 1.75 / 1;
`;
export const ImageBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8px;
  width: 512px;
`;
export const LeftArrow = styled(IoIosArrowForward)`
  transform: rotate(180deg);
  font-size: 24px;
`;
export const RightArrow = styled(IoIosArrowForward)`
  font-size: 24px;
`;
export const SubImageBox = styled.div`
  display: flex;
  width: 432px;
`;
export const SubImage = styled.img<{
  onClick: () => void;
  $imageNum: number;
  idx: number;
}>`
  object-fit: cover;
  width: ${(props) => (props.$imageNum === props.idx ? "98px" : "102px")};
  height: ${(props) => (props.$imageNum === props.idx ? "98px" : "102px")};
  border: ${(props) => props.$imageNum === props.idx && "2px solid black"};
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
export const reviewBox = styled.div`
  width: 512px;
  margin: 4px 0px;
`;
export const Text = styled.span`
  font-weight: bold;
  margin-right: 4px;
  &.review_score {
    background-color: #ffb800;
    border-radius: 8px;
    padding: 0px 4px;
    color: white;
  }
  &.review {
    color: #ffb800;
  }
  &.review_count {
    color: #c5c4c4;
  }
  &.address {
    color: #828282;
    margin: 0px;
  }
`;
