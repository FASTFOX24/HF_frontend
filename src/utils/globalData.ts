import { atom } from "recoil";

//static data
export const navBarList = [
  { btnName: "홈", path: "/" },
  { btnName: "운동시설 보기", path: "/list_gym" },
  { btnName: "이용권 구매 내역", path: "/list_ticket" },
  {
    btnName: "더 보기",
    list: [
      { btnName: "마이프로필", path: "/profile" },
      { btnName: "이벤트", path: "/event" },
      { btnName: "커뮤니티", path: "/comunity" },
    ],
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
