import styled from "styled-components";
import theme from "../../../styles/theme";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0px 24px;
  overflow: scroll;
`;
export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 48px 0px;
  width: 100%;
  max-width: 312px;
`;
export const Title = styled.h3`
  ${theme.text.display_5}
`;
export const Box_1 = styled.div`
  flex-direction: column;
  width: 100%;
  margin: 48px 0px;
`;
export const Box_1_1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Box_1_1_1 = styled.div`
  display: flex;
  align-items: center;
`;
export const Box_1_2 = styled.div`
  display: grid;
  grid-gap: 40px;
`;
export const JustAgree = styled.span`
  ${theme.text.heading_2}
`;
export const DoneButton = styled.button<{ usable: boolean }>`
  ${theme.text.heading_4}
  width: 100%;
  height: 48px;
  border-radius: 16px;
  color: ${theme.color.gray.white};
  background-color: ${theme.color.primary.OR500};
  &:disabled {
    color: ${theme.color.gray.G400};
    background-color: ${theme.color.gray.G300};
  }
`;
export const Divider = styled.hr`
  width: 100%;
  border: 1px solid ${theme.color.gray.G200};
  border-radius: 99px;
  margin: 20px 0px;
`;
export const NonCheckIcon = styled(MdRadioButtonUnchecked)`
  font-size: 24px;
  color: ${theme.color.gray.G300};
  margin-right: 8px;
`;
export const CheckIcon = styled(IoCheckmarkCircle)`
  font-size: 24px;
  color: ${theme.color.primary.OR500};
  margin-right: 8px;
`;
