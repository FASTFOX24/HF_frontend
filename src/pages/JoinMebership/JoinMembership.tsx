import * as Yup from "yup";
import * as S from "./styled";
import React from "react";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { joinMembershipInputList } from "../../store/globalData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  addNewUser,
  duplicateCheck,
  joinMembershipSchema,
} from "../../utils/membership";

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
  const changeValue = (name: inputNameType, value: string) => {
    setValue(name, value);
  };
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
        message: "이미 사용중인 이메일입니다.",
      });
    }
  };
  const onSubmit = async () => {
    if (!errors.nickname) {
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
          if (
            window.confirm(
              "회원가입이 완료되었습니다. 로그인 페이지로 이동하시겠습니까?"
            )
          ) {
            navigate("/auth/login");
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setError("email", {
              message: "이미 사용중인 이메일입니다.",
            });
          } else {
            alert(`회원가입 중 문제가 발생하였습니다.`);
          }
        });
    }
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
