import styled from "styled-components";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import theme from "../../../../styles/theme";

export const Box_1_1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Box_1_1_1 = styled.div`
  display: flex;
  align-items: center;
`;
export const PolicyTitle = styled.span`

  ${theme.text.heading_4}
  font-weight: 400;
  margin-right: 8px;
`;
export const Essential = styled.span`
  ${theme.text.heading_4}
  font-weight: 400;
  color: ${theme.color.system.R300};
`;
export const NonEssential = styled.span`
  ${theme.text.heading_4}
  font-weight: 400;
  color: ${theme.color.gray.G400};
`;
export const DetailBtn = styled.button`
  ${theme.text.body_1}
  color : ${theme.color.gray.G400};
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
