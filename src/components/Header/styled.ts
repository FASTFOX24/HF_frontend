import theme from "../../styles/theme";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: 100vw;
  //이후에 삭제 필요.
  flex-direction: column;
  z-index: 10;
`;
export const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 48px;
  padding: 0px 12px 0px 24px;
  @media (min-width: 1280px) {
    height: 56px;
  }
`;
export const Health = styled.span`
  ${theme.text.heading_4}
  font-weight: 900;
  @media (min-width: 1280px) {
    ${theme.text.heading_2}
    font-weight: 900;
  }
`;
export const Friend = styled.span`
  ${theme.text.body_1}
  color: ${theme.color.primary.OR500};
  @media (min-width: 1280px) {
    ${theme.text.heading_3}
  }
`;
export const MenuBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
  @media (max-width: 1280px) {
    display: none;
  }
`;
export const MenuBtn = styled.button<{
  onClick: () => void;
  auth: boolean;
  signin: boolean;
}>`
  width: 100px;
  height: 36px;
  border-radius: 99px;
  ${({ auth, signin }) =>
    auth && signin
      ? css`
          border: 1px solid ${theme.color.primary.OR500};
          color: ${theme.color.primary.OR500};
          background-color: ${theme.color.gray.white};
        `
      : auth
      ? css`
          color: ${theme.color.gray.white};
          background-color: ${theme.color.primary.OR500};
        `
      : css`
          ${theme.text.heading_4}
        `}
`;
export const HamburgerBox = styled.div`
  @media (min-width: 1280px) {
    display: none;
  }
`;
