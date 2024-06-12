import * as Yup from "yup";
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";
import { postData } from "../apis/aip";
import { ref, query, orderByChild, equalTo } from "firebase/database";
import { auth, database } from "../firebase";
import { onValue } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";

//// 회원가입
//닉네임 중복 검사
interface nicknameProps {
  nickname: string;
}
export const nicknameDoubleCheck = async ({ nickname }: nicknameProps) => {
  const mostViewedPosts = query(
    ref(database, "users"),
    orderByChild("nickname"),
    equalTo(nickname)
  );
  return new Promise((resolve, reject) => {
    onValue(
      mostViewedPosts,
      (snapshot) => {
        if (snapshot.exists()) {
          resolve(true);
        } else {
          resolve(false);
        }
      },
      (error) => {
        console.error("Error checking nickname:", error);
        reject(error);
      }
    );
  });
};
//계정 생성
// export const onSubmit: SubmitHandler<FieldValues> = ({
//   email,
//   nickname,
//   password,
//   address,
//   detailAddress,
// }) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       postData({
//         url: `users/${nickname}`,
//         data: {
//           uid: userCredential.user.uid,
//           email: email,
//           password: password,
//           addreess: `${address} ${detailAddress}`,
//         },
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
// 유효성 검사
export const joinMembershipSchema = Yup.object({
  email: Yup.string()
    .required("이메일(아이디)을 입력해 주세요")
    .email("이메일 형식을 입력해주세요"),
  password: Yup.string()
    .required("비밀번호를 입력해 주세요")
    .min(8, "비밀번호는 최소 8자리 이상입니다")
    .max(16, "비밀번호는 최대 16자리까지 입니다")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
      "영문자, 숫자, 특수문자를 조합해서 입력하세요"
    ),
  nickname: Yup.string()
    .required("닉네임을 입력해주세요")
    .max(12, "닉네임은 최대 12자리까지 입니다")
    .matches(/^\S*$/, "공란없이 입력해야합니다"),
  password_confirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "비밀번호가 일치하지 않습니다"
  ),
  address: Yup.string().required("주소를 입력해주세요"),
  detailAddress: Yup.string().required("상세 주소를 입력해주세요"),
});

//로그인
export const loginSchema = Yup.object({
  email: Yup.string()
    .required("아이디(이메일)을 입력해 주세요")
    .email("이메일 형식을 입력해주세요"),
  password: Yup.string().required("비밀번호를 입력해 주세요"),
});

//이용약관 필수사항 동의 여부
export const policySchema = Yup.object({
  essentialPolicy_1 : Yup.bool().oneOf(
    [true],
    "이용약관 동의 후 가입이 가능합니다."
  ),
  essentialPolicy_2 : Yup.bool().oneOf(
    [true],
    "이용약관 동의 후 가입이 가능합니다."
  ),
  essentialPolicy_3 : Yup.bool().oneOf(
    [true],
    "이용약관 동의 후 가입이 가능합니다."
  ),
  essentialPolicy_4 : Yup.bool().oneOf(
    [true],
    "이용약관 동의 후 가입이 가능합니다."
  ),
  essentialPolicy_5 : Yup.bool().oneOf(
    [true],
    "이용약관 동의 후 가입이 가능합니다."
  ),
})