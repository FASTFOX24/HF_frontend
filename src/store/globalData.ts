import { atom } from "recoil";

//static data
export const menuList = [
  { btnName: "헬스장 찾기", path: "/list_gym", auth: false, signin: false },
  { btnName: "이벤트", path: "/event", auth: false, signin: false },
  { btnName: "커뮤니티", path: "/comunity", auth: false, signin: false },
  { btnName: "로그인", path: "auth/login", auth: true, signin: true },
  {
    btnName: "회원가입",
    path: "auth/join_membership/policies",
    auth: true,
    signin: false,
  },
];
export const navBarList = [
  { btnName: "헬스장 찾기", path: "/list_gym" },
  { btnName: "이벤트", path: "/event" },
  { btnName: "커뮤니티", path: "/comunity" },
];
export const policyList = [
  { btnName: "만 14세 이상 여부", essential: true, path: "" },
  { btnName: "서비스 이용약관", essential: true, path: "" },
  { btnName: "위치기반 서비스 이용약관", essential: true, path: "" },
  { btnName: "개인정보 수집 및 이용동의", essential: true, path: "" },
  { btnName: "개인정보 제3자 제공동의", essential: true, path: "" },
  { btnName: "마케팅 정보 수신 동의", essential: false, path: "" },
];
export const joinMembershipInputList = [
  { inputName: "email", placeholder: "이메일", type: "text", icon: false },
  {
    inputName: "password",
    placeholder: "비밀번호",
    type: "password",
    icon: true,
  },
  {
    inputName: "confirm_password",
    placeholder: "비밀번호 확인",
    type: "password",
    icon: true,
  },
  {
    inputName: "nickname",
    placeholder: "닉네임",
    type: "text",
    icon: false,
  },
  { inputName: "address", placeholder: "주소", type: "text", icon: true },
  {
    inputName: "detail_address",
    placeholder: "상세주소",
    type: "text",
    icon: false,
  },
];
export const gymSortList = [
  { btnName: "낮은 가격순", sortName: "price_low" },
  { btnName: "높은 가격순", sortName: "price_high" },
  { btnName: "평점순", sortName: "review" },
];
export const detailGymInfo = [
  {
    name: "상세정보",
    type: "drawer",
    info: {
      info_1: { name: "기본정보", content: "" },
      info_2: { name: "요금정보", content: "" },
      info_3: { name: "판매자 정보", content: {} },
    },
  },
  {
    name: "리뷰",
    type: "review",
    info: {
      review_1: {},
    },
  },
];
//recoil data
export const userData = atom({
  key: "userData",
  default: {
    address: "",
    displayName: "",
    email: "",
    password: "",
    point: 0,
    coupon: {},
  },
});
export const gymListData = atom({
  key: "gymListData",
  default: {},
});
export const gymData = atom({
  key: "gymData",
  default: {
    image: [""],
    name: "",
    price: 0,
    reviewCount: 0,
    reviewScore: 0,
    id: "",
  },
});
export const gymInfoData = atom({
  key: "gymInfoData",
  default: {},
});
export const reviewData = atom({
  key: "reviewData",
  default: {},
});
//test
export const gymInfo = {
  image:
    "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17c2afa93c423e94d6/2ZvFyLPufDjjDWQKbgwJKjN75CSe5YWJWj4e.photo_25.900x600.jpg",
  name: "알수없음",
  price: 0,
  reviewRate: 0,
  review: 0,
  id: "",
};
