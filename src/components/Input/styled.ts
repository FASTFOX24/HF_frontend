import styled from "styled-components";
import theme from "../../styles/theme";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { GrMap } from "react-icons/gr";
import { IoAlertCircleOutline } from "react-icons/io5";

export const Container = styled.div`
  position: relative;
`;
export const InputWrapper = styled.div<{ $alertMessage: string }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 52px;
  border-radius: 16px;
  border: ${({ $alertMessage }) =>
    $alertMessage
      ? `1px solid ${theme.color.system.R400}`
      : `1px solid ${theme.color.gray.G500}`};
  background-color: ${({ $alertMessage }) =>
    $alertMessage && theme.color.system.R100};
`;
export const InputField = styled.input<{
  type: string;
  $pswVisible: boolean;
  $alertMessage: string;
  $icon: boolean;
}>`
  ${theme.text.body_1}
  position: relative;
  width: ${({ $icon }) => ($icon ? "calc(100% - 40px)" : "100%")};
  height: 52px;
  padding: 20px 16px 0px 16px;
  transition: transform 0.3s;
  z-index: 3;
`;
export const Placeholder = styled.span<{
  $hasContent: string;
  $alertMessage: string;
}>`
  ${({ $hasContent }) =>
    $hasContent ? theme.text.caption_2 : theme.text.body_1}
  position: absolute;
  top: 50%;
  left: 16px;
  z-index: 0;
  color: ${({ $alertMessage }) =>
    $alertMessage ? theme.color.system.R400 : theme.color.gray.G500};
  transition: transform 0.3s, font-size 0.3s;
  transform: ${({ $hasContent }) =>
    $hasContent ? "translateY(-20px)" : "translateY(-50%)"};
  ${InputField}:focus + & {
    ${theme.text.caption_2}
    transform: translateY(-20px);
  }
`;
export const ErrorBox = styled.div`
  position: absolute;
  left: 4px;
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ErrorMessage = styled.p`
  ${theme.text.caption_1}
  color: ${theme.color.system.R400};
`;
export const InvisibleIcon = styled(AiOutlineEye)`
  position: absolute;
  top: 50%;
  right: 16px;
  font-size: 24px;
  color: ${theme.color.gray.G600};
  transform: translateY(-50%);
`;
export const VisibleIcon = styled(AiOutlineEyeInvisible)`
  position: absolute;
  top: 50%;
  right: 16px;
  font-size: 24px;
  color: ${theme.color.gray.G600};
  transform: translateY(-50%);
`;
export const MapIcon = styled(GrMap)<{ onClick: () => void }>`
  position: absolute;
  top: 50%;
  right: 16px;
  font-size: 24px;
  color: ${theme.color.gray.G600};
  transform: translateY(-50%);
`;
export const AlertIcon = styled(IoAlertCircleOutline)`
  font-size: 18px;
  color: ${theme.color.system.R400};
  margin-right: 2px;
`;
