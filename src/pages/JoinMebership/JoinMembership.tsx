import React, { useState } from "react";
import * as S from "./styled";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  joinMembershipSchema,
  nicknameDoubleCheck,
} from "../../utils/membership";
import { useNavigate } from "react-router";
import { onClickAddr } from "../../utils/etc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { postData } from "../../apis/aip";

type FormData = Yup.InferType<typeof joinMembershipSchema>;

const JoinMembership = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(joinMembershipSchema),
  });
  const [visibleState, setVisibleState] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState(false);
  const navigate = useNavigate();
  const changeVisible = () => {
    setVisibleState(!visibleState);
  };
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
    createUserWithEmailAndPassword(
      auth,
      getValues("email"),
      getValues("password")
    )
      .then((userCredential) => {
        postData({
          url: `users/${userCredential.user.uid}`,
          data: {
            displayName: getValues("nickname"),
            email: getValues("email"),
            password: getValues("password"),
            addreess: `${getValues("address")} ${getValues("detailAddress")}`,
            point: 0,
            coupon: {
              NEWMEMBERCOUPON: { title: "신규회원 할인쿠폰", per: 15},
            },
          },
        });
        navigate("/auth/login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("email", {
            type: "manual",
            message: "이미 사용중인 이메일입니다.",
          });
        }
      });
  };
  return (
    <S.Container>
      <S.PageTitle>회원가입</S.PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <S.TextArea
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
            {...register("password_confirm")}
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
          <S.ErrorMessage>{errors.detailAddress?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.JoinBtn type="submit" value={"등록 완료하기"} />
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
