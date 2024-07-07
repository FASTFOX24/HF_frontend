import * as Yup from "yup";
import * as S from "./styled";
import React from "react";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { joinMembershipInputList } from "../../store/globalData";
import { addNewUser, joinMembershipSchema } from "../../utils/membership";

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
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(joinMembershipSchema),
  });
  const navigate = useNavigate();
  const changeValue = (name: inputNameType, value: string) => {
    setValue(name, value);
  };

  const onSubmit = async () => {
    try {
      await addNewUser({
        email: getValues("email"),
        nickname: getValues("nickname"),
        password: getValues("password"),
        address: `${getValues("address")} ${getValues("detail_address")}`,
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
    } catch (error: any) {
      alert(
        `회원가입 중 문제가 발생하였습니다. 나중에 다시 시도해주시기 바립니다.`
      );
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
        <S.JoinBtn type="submit" value={"운동 시작하기"} />
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
