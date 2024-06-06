import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.3em #e5e4e4;
  border-radius: 16px;
  width: 512px;
  margin-top: 16px;
`;
export const NavBox = styled.div<{ $navlength: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(${(props) => props.$navlength}, 1fr);
`;
export const NavButton = styled.button<{
  $currentnav: string;
  $btnName: string;
}>`
  color: ${(props) =>
    props.$btnName === props.$currentnav ? "#FF6300" : "#D1D1D1"};
  border-bottom: ${(props) =>
    props.$btnName === props.$currentnav
      ? "3px solid #FF6300"
      : "2px solid #E3E3E3"};
  padding: 12px 0px;
  font-weight: bold;
`;
export const InfoBox = styled.div<{ $infoname: string; $currentnav: string }>`
  display: ${(props) => props.$infoname !== props.$currentnav && "none"};
  border-bottom: 2px solid #e3e3e3;
  &:last-child {
    border-bottom: 0px;
  }
`;
export const Drawer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 12px 0px;
`;
export const Title = styled.span`
  margin-left: 20px;
`;
export const IconButton = styled.button``;
export const ArrowDown = styled(IoIosArrowForward)`
  transform: rotate(90deg);
  margin-right: 20px;
`;
export const ArrowUp = styled(IoIosArrowForward)`
  margin-right: 20px;
  transform: rotate(270deg);
`;
export const DetailInfoBox = styled.div<{
  $detailInfoNav: string;
  data: string;
}>`
  display: ${(props) => props.$detailInfoNav !== props.data && "none"};
  background-color: #f8f8f8;
  margin: 0 20px 20px 20px;
  padding: 12px;
`;
export const Review = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
export const UserDataBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
export const UserImg = styled.img<{ src: string }>`
  width: 32px;
  border-radius: 99px;
  margin-right: 8px;
`;
export const DisplayName = styled.span`
  color: #3a3939;
`;
export const Content = styled.p`
  align-items: center;
  margin-bottom: 16px;
  color: #3a3939;
`;
export const Data = styled.p`
  text-align: end;
  color: #3a3939;
`;
export const MoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
