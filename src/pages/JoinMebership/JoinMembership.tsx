import * as Yup from "yup";
import * as S from "./styled";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useForm } from "react-hook-form";
import { postData } from "../../apis/aip";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  joinMembershipSchema,
  nicknameDoubleCheck,
} from "../../utils/membership";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../../components/Input/Input";
import { joinMembershipInputList } from "../../store/globalData";

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
  const [doubleCheck, setDoubleCheck] = useState(false);
  const navigate = useNavigate();
  const checkNickname = () => {
    nicknameDoubleCheck({ nickname: getValues("nickname") }).then((result) => {
      if (
        result ||
        /^\s*$/.test(getValues("nickname")) ||
        !getValues("nickname")
      ) {
        setDoubleCheck(false);
      } else {
        setDoubleCheck(true);
      }
    });
  };
  const onSubmit = () => {

    nicknameDoubleCheck({ nickname: getValues("nickname") }).then((result) => {
      // if (
      //   result ||
      //   /^\s*$/.test(getValues("nickname")) ||
      //   !getValues("nickname")
      // ) {
      //   setDoubleCheck(false);
      // } else {
      //   setDoubleCheck(true);
      // }
      console.log("run")
      console.log(result)
    });

    // createUserWithEmailAndPassword(
    //   auth,
    //   getValues("email"),
    //   getValues("password")
    // )
    //   .then((userCredential) => {
    //     postData({
    //       url: `users/${userCredential.user.uid}`,
    //       data: {
    //         displayName: getValues("nickname"),
    //         email: getValues("email"),
    //         password: getValues("password"),
    //         addreess: `${getValues("address")} ${getValues("detail_address")}`,
    //         point: 0,
    //         coupon: {
    //           NEWMEMBERCOUPON: { title: "신규회원 할인쿠폰", per: 15 },
    //         },
    //       },
    //     });
    //     navigate("/auth/login");
    //   })
    //   .catch((error) => {
    //     if (error.code === "auth/email-already-in-use") {
    //       setError("email", {
    //         type: "manual",
    //         message: "이미 사용중인 이메일입니다.",
    //       });
    //     }
    //   });
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
  const check = () => {
    const email = getValues("email");
    const password = getValues("password");
    const confirm_password = getValues("confirm_password");
    const nickname = getValues("nickname");
    const address = getValues("address");
    const detail_address = getValues("detail_address");
    console.log("email", email);
    console.log("password", password);
    console.log("confirm_password", confirm_password);
    console.log("nickname", nickname);
    console.log("address", address);
    console.log("detail_address", detail_address);
  };
  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          {inputField}
          {/* <S.TextArea
            {...register("email")}
            className="checkBtn"
            placeholder="아이디를 입력하세요"
          />
          {errors.email && (
            <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.TextArea
            {...register("nickname")}
            className="checkBtn"
            placeholder="닉네임을 입력하세요"
            onChange={() => {
              setDoubleCheck(false);
            }}
          />
          {doubleCheck ? (
            <S.doubleCheckBtn className="checked">사용 가능</S.doubleCheckBtn>
          ) : (
            <S.doubleCheckBtn onClick={checkNickname}>
              중복 확인
            </S.doubleCheckBtn>
          )}

          <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.InputContainer>
          <S.TextArea
            {...register("password")}
            type="password"
            className="nomalBtn"
            placeholder="비밀번호를 입력하세요"
          />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.InputContainer>
          <S.TextArea
            {...registerconfirm_password")}
            type={visibleState ? "" : "password"}
            className="inbisible"
            placeholder="비밀번호 확인"
          />
          <S.IconBtn onClick={changeVisible}>
            {visibleState ? <S.InvisibleIcon /> : <S.VisibleIcon />}
          </S.IconBtn>
          <S.ErrorMessage>{errors.password_confirm?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.InputContainer>
          <S.TextArea
            {...register("address")}
            id="address"
            className="checkBtn"
            placeholder="주소를 입력하세요"
          />
          <S.doubleCheckBtn
            onClick={() => {
              onClickAddr({ docId: "address" });
            }}
          >
            주소 찾기
          </S.doubleCheckBtn>
          <S.ErrorMessage>{errors.address?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.InputContainer>
          <S.TextArea
            {...register("detailAddress")}
            placeholder="상세주소를 입력하세요"
            className="nomalBtn"
          />
          <S.ErrorMessage>{errors.detailAddress?.message}</S.ErrorMessage> */}
        </S.InputContainer>
        <S.JoinBtn type="submit" value={"운동 시작하기"} />
      </form>
      <S.LoginBox>
        <S.LoginText>이미 계정이 있으신가요?</S.LoginText>
        <S.LoginBtn onClick={check}>
          {/* <S.LoginBtn
          onClick={() => {
            navigate("/auth/login");
          }}
        > */}
          로그인 하러가기
        </S.LoginBtn>
      </S.LoginBox>
    </S.Container>
  );
};

export default JoinMembership;
