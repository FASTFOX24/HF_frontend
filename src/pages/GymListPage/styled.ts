import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 0px;
`;
export const GymList = styled.div`
  display: grid;
  gap: 8px;
  margin: 0 auto;
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) and (max-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const Map = styled.div`
  width: 500px;
  height: 400px;
`;
