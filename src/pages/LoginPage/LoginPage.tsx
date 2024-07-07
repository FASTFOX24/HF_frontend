import * as Yup from "yup";
import * as S from "./styled";
import React from "react";
import { useForm } from "react-hook-form";
import { getData } from "../../apis/aip";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/membership";
import { auth, provider } from "../../firebase";
import { useSetRecoilState } from "recoil";
import { loginInputList, userData } from "../../store/globalData";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Input from "../../components/Input/Input";

type FormData = Yup.InferType<typeof loginSchema>;
type InputName = "email" | "password";

const LoginPage = () => {
  const {
    handleSubmit,
    getValues,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });
  const setUserData = useSetRecoilState(userData);
  const navigate = useNavigate();
  const changeValue = (name: InputName, value: string) => {
    setValue(name, value);
  };
  const onSubmit = () => {
    signInWithEmailAndPassword(auth, getValues("email"), getValues("password"))
      .then((userCredential) => {
        console.log(userCredential);
        // getData(`/users/${userCredential.user.uid}`).then((result) => {
        //   console.log(result);
        //   setUserData(result);
        // });
        // navigate("/");
      })
      .catch(() => {
        setError("password", {
          type: "manual",
          message: "비밀번호가 일치하지 않습니다.",
        });
      });
  };
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
        // navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const inputFields = loginInputList.map((inputData) => (
    <Input
      key={`input_login_${inputData.inputName}`}
      inputData={inputData}
      value={getValues(inputData.inputName as InputName) || ""}
      $alertMessage={errors[inputData.inputName as InputName]?.message || ""}
      changeValue={changeValue}
    />
  ));
  return (
    <S.Container>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.FormBox onSubmit={handleSubmit(onSubmit)}>
        {inputFields}
        <S.LoginBtn type="submit" value={"로그인"} />
      </S.FormBox>
      <S.DividerBox>
        <S.Divider />
        <S.DividerText>또는</S.DividerText>
        <S.Divider />
      </S.DividerBox>
      <S.OauthBox>
        <S.AuthBtn
          className="google"
          onClick={() => {
            googleAuth();
          }}
        >
          <S.GoogleIcon />
          Google 로그인
        </S.AuthBtn>
        <S.AuthBtn className="kakao">
          <S.KakaoIcon />
          카카오 로그인
        </S.AuthBtn>
      </S.OauthBox>
      <S.JMBox>
        <S.Text_1>계정이 없으신가요?</S.Text_1>
        <S.JMBtn
          onClick={() => {
            navigate("/auth/join_membership/policies");
          }}
        >
          회원가입 하러가기
        </S.JMBtn>
      </S.JMBox>
    </S.Container>
  );
};

export default LoginPage;
