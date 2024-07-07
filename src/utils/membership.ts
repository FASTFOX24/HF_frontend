import * as Yup from "yup";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

//// 회원가입
interface userDataProps {
  email: string;
  nickname: string;
  password: string;
  address: string;
}
type PartialUserDataProps = Pick<userDataProps, "email" | "nickname">;
//계정 생성
export const addNewUser = async ({
  email,
  password,
  nickname,
  address,
}: userDataProps) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      displayName: nickname,
      address: address,
    });
  } catch (error) {
    throw error;
  }
};
export const duplicateCheck = async ({
  nickname,
  email,
}: PartialUserDataProps) => {
  const nicknameQuery = query(
    collection(db, "users"),
    where("displayName", "==", nickname)
  );
  const emailQuery = query(
    collection(db, "users"),
    where("email", "==", email)
  );
  const nicknameSnapshot = await getDocs(nicknameQuery);
  const emailSnapshot = await getDocs(emailQuery);
  return { nickname: nicknameSnapshot.empty, email: emailSnapshot.empty };
};
// 유효성 검사
export const joinMembershipSchema = Yup.object({
  email: Yup.string()
    .required("이메일을 입력해 주세요.")
    .email("올바르지 않은 형식의 이메일 입니다."),
  password: Yup.string()
    .required("비밀번호를 입력해 주세요.")
    .min(8, "비밀번호는 8자리에서 16자리 이내여야 합니다.")
    .max(16, "비밀번호는 8자리에서 16자리 이내여야 합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!$%^&*#?])[A-Za-z\d@!$%^&*#?]+$/,
      "영문, 숫자, 특수문자(@!$%^&*#?)가 들어가야 합니다."
    ),
  nickname: Yup.string()
    .required("닉네임을 입력해주세요")
    .max(12, "닉네임은 최대 12자리까지 입니다")
    .matches(/^\S*$/, "공란없이 입력해야합니다"),
  confirm_password: Yup.string()
    .required("비밀번호 확인이 필요합니다.")
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다"),
  address: Yup.string().required("주소를 입력해주세요"),
  detail_address: Yup.string().required("상세 주소를 입력해주세요"),
});
//로그인
export const loginSchema = Yup.object({
  email: Yup.string()
    .required("아이디(이메일)을 입력해 주세요")
    .email("이메일 형식을 입력해주세요"),
  password: Yup.string().required("비밀번호를 입력해 주세요"),
});
