import * as Yup from "yup";
import * as S from "./styled";
import React from "react";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { joinMembershipInputList } from "../../store/globalData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  addNewUser,
  duplicateCheck,
  joinMembershipSchema,
} from "../../utils/membership";
import { collection, getDocs, query, where } from "firebase/firestore";

type FormData = Yup.InferType<typeof joinMembershipSchema>;
type inputNameType =
  | "email"
  | "password"
  | "nickname"
  | "confirm_password"
  | "address"
  | "detail_address";

const JoinMembership = () => {
  const {
    handleSubmit,
    getValues,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(joinMembershipSchema),
  });
  const navigate = useNavigate();
  const clickDone = async () => {
    const error = await duplicateCheck(
      getValues("nickname") || "",
      getValues("email") || ""
    );
    if (!error.nicknameDuplicate) {
      setError("nickname", {
        message: "이미 사용중인 닉네임입니다.",
      });
    }
    if (!error.emailDuplicate) {
      setError("email", {
        type: "manual",
        message: "이미 사용중인 이메일입니다.",
      });
    }
  };
  const onSubmit = async () => {
    await createUserWithEmailAndPassword(
      auth,
      getValues("email"),
      getValues("password")
    )
      .then(() => {
        addNewUser({
          email: getValues("email"),
          nickname: getValues("nickname"),
          password: getValues("password"),
          address: getValues("address"),
          detailAddress: getValues("detail_address"),
        });
      })
      .catch((error) => {
        // console.error(error);
        alert(`회원가입 중 문제가 발생하였습니다. 
        
        ${error.code}`);
      });
  };
  const changeValue = (name: inputNameType, value: string) => {
    setValue(name, value);
  };
  const inputField = joinMembershipInputList.map((inputData) => (
    <Input
      key={`input_joinMembership_${inputData.inputName}`}
      value={getValues(inputData.inputName as inputNameType) || ""}
      inputData={inputData}
      $alertMessage={
        errors[inputData.inputName as inputNameType]?.message || ""
      }
      changeValue={changeValue}
    />
  ));
  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>{inputField}</S.InputContainer>
        <S.JoinBtn type="submit" value={"운동 시작하기"} onClick={clickDone} />
      </form>
      <S.LoginBox>
        <S.LoginText>이미 계정이 있으신가요?</S.LoginText>
        <S.LoginBtn
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          로그인 하러가기
        </S.LoginBtn>
      </S.LoginBox>
    </S.Container>
  );
};

export default JoinMembership;
