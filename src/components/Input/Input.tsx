import { useForm } from "react-hook-form";
import * as S from "./styled";
import React, { useEffect, useState } from "react";
import { onClickAddr } from "../../utils/etc";

type inputNameType =
  | "email"
  | "password"
  | "nickname"
  | "confirm_password"
  | "address"
  | "detail_address";
interface InputProps {
  inputData: {
    inputName: string;
    placeholder: string;
    type: string;
    icon: boolean;
  };
  value: string;
  $alertMessage: any | string;
  changeValue: (name: inputNameType, e: string) => void;
}

const Input = ({
  inputData,
  value,
  $alertMessage,
  changeValue,
}: InputProps) => {
  const { register } = useForm();
  const [content, setContent] = useState(value);
  const [pswVisible, setPswVisible] = useState(false);
  const handleChange = (name: inputNameType, value: string) => {
    changeValue(name, value);
    setContent(value);
  };
  const changeVisible = () => {
    setPswVisible(!pswVisible);
  };
  const openSerchAddress = () => {
    onClickAddr({ docId: "address", handleChange });
  };
  return (
    <S.Container>
      <S.InputWrapper $alertMessage={$alertMessage}>
        <S.InputField
          id={inputData.inputName}
          name={inputData.inputName}
          type={
            inputData.type === "password" && !pswVisible ? "password" : "text"
          }
          $pswVisible={pswVisible}
          $icon={inputData.icon}
          value={content}
          $alertMessage={$alertMessage}
          onChange={(e) => {
            handleChange(inputData.inputName as inputNameType, e.target.value);
            register(inputData.inputName);
          }}
          autoComplete="off"
        />
        <S.Placeholder $hasContent={content} $alertMessage={$alertMessage}>
          {inputData.placeholder}
        </S.Placeholder>
        {inputData.type === "password" && !pswVisible ? (
          <S.InvisibleIcon onClick={changeVisible} />
        ) : inputData.type === "password" ? (
          <S.VisibleIcon onClick={changeVisible} />
        ) : inputData.inputName === "address" ? (
          <S.MapIcon onClick={openSerchAddress} />
        ) : (
          <></>
        )}
      </S.InputWrapper>
      {$alertMessage && (
        <S.ErrorBox>
          <S.AlertIcon />
          <S.ErrorMessage>{$alertMessage}</S.ErrorMessage>
        </S.ErrorBox>
      )}
    </S.Container>
  );
};

export default Input;