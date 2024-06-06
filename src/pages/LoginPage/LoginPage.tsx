import React, { useState } from "react";
import * as S from "./styled";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/membership";
import { auth, provider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { userData } from "../../utils/globalData";
import { useSetRecoilState } from "recoil";
import { getData } from "../../apis/aip";
type FormData = Yup.InferType<typeof loginSchema>;
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });
  const setUserData = useSetRecoilState(userData);
  const [visibleState, setVisibleState] = useState(false);
  const navigate = useNavigate();
  const changeVisible = () => {
    setVisibleState(!visibleState);
  };
  const onSubmit = () => {
    signInWithEmailAndPassword(auth, getValues("email"), getValues("password"))
      .then((userCredential) => {
        getData(`/users/${userCredential.user.uid}`).then((result) => {
          setUserData(result);
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.errorCode);
        setError("password", {
          type: "manual",
          message: "비밀번호가 일치하지 않습니다.",
        });
      });
  };
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <S.Container>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.FormBox onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <S.TextField
            {...register("email")}
            placeholder="아이디를 입력하세요"
          />
          <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.InputContainer>
          <S.TextField
            {...register("password")}
            placeholder="비밀번호를 입력하세요"
            type={visibleState ? "" : "password"}
          />
          <S.IconBtn onClick={changeVisible}>
            {visibleState ? <S.InvisibleIcon /> : <S.VisibleIcon />}
          </S.IconBtn>
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.LoginBtn type="submit" value={"운동 시작하기"} />
      </S.FormBox>
      <S.DividerBox>
        <S.Divider></S.Divider>
        <S.DividerText>또는</S.DividerText>
        <S.Divider></S.Divider>
      </S.DividerBox>
      <S.OauthBox>
        <S.KakaoAuth>
          <S.KakaoIcon />
          Kakao
        </S.KakaoAuth>
        <S.GoogleAuth
          onClick={() => {
            googleAuth();
          }}
        >
          <S.GoogleIcon />
          Google
        </S.GoogleAuth>
      </S.OauthBox>
      <S.JMBox>
        <S.Text_1>계정이 없으신가요?</S.Text_1>
        <S.JMBtn
          onClick={() => {
            navigate("/auth/join_membership");
          }}
        >
          회원가입 하러가기
        </S.JMBtn>
      </S.JMBox>
    </S.Container>
  );
};

export default LoginPage;
