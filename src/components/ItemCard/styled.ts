import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e1d1d;
  border-radius: 16px;
`;
export const GymImage = styled.img<{ src: string }>`
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  @media (max-width: 479px) {
    width: 320px;
    height: 182px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 440px;
    height: 250px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 350px;
    height: 200px;
  }
  @media (min-width: 1024px) {
    width: 280px;
    height: 160px;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;
export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  &.infoline_2 {
    align-items: center;
    margin-top: 8px;
  }
`;
export const PriceBox = styled.div`
  display: flex;
`;
export const Text = styled.span`
  &.white {
    color: white;
  }
  &.highlight {
    color: #ff6300;
  }
  &.small {
    font-size: 12px;
  }
  &.bold {
    font-weight: bold;
  }
  &#info_name {
    letter-spacing: 0.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 479px) {
      width: 160px;
    }
    @media (min-width: 480px) and (max-width: 767px) {
      width: 300px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      width: 200px;
    }
    @media (min-width: 1024px) {
      width: 120px;
    }
  }
`;
