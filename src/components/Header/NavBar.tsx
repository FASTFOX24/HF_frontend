import React, { useEffect } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router";
import NestedList from "./NestedList";
import { auth } from "../../firebase";

import { getData } from "../../apis/aip";
import { onAuthStateChanged } from "firebase/auth";
import { navBarList, userData } from "../../utils/globalData";
import { useRecoilState } from "recoil";
import { addComma } from "../../utils/etc";
interface NavBarProps {
  isOpen: boolean;
}
const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userData);
  const list = navBarList.map((btn) => {
    if (btn.list) {
      return (
        <NestedList
          key={`navBtns_${btn.btnName}`}
          btnName={btn.btnName}
          list={btn.list}
        />
      );
    } else {
      return (
        <S.NavBtn_1
          key={`navBtn_${btn.btnName}`}
          onClick={() => {
            navigate(btn.path);
          }}
        >
          {btn.btnName}
        </S.NavBtn_1>
      );
    }
  });
  useEffect(() => {
    if (user?.uid) {
      onAuthStateChanged(auth, (user) => {
        getData(`/users/${user?.uid}`).then((result) => {
          setUserInfo(result);
        });
      });
    }
  }, [setUserInfo, user?.uid]);
  return (
      <S.NavBar $isOpen={isOpen}>
        {user?.uid ? (
          <S.LoginBox>
            <S.ProfileBtn>
              <S.UserIcon></S.UserIcon>
              <S.DisplayName>{userInfo.displayName}</S.DisplayName>
            </S.ProfileBtn>
          </S.LoginBox>
        ) : (
          <S.LoginBox>
            <S.TextBox_1>
              로그인 후 이용하시면 <br /> 할인 쿠폰과 추가 혜택을 받을 수
              있어요.
            </S.TextBox_1>
            <S.LoginBtn
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              로그인
            </S.LoginBtn>
          </S.LoginBox>
        )}

        <S.CouponBox>
          <S.TextBox_2>
            {user?.uid ? addComma(userInfo.point) : "-"}
            <br />
            포인트
          </S.TextBox_2>
          <S.Divider />
          <S.TextBox_2>
            {!user?.uid
              ? "-"
              : !userInfo.coupon
              ? "0 개"
              : Object.keys(userInfo.coupon).length + " 개"}
            <br />
            할인쿠폰
          </S.TextBox_2>
        </S.CouponBox>
        {list}
      </S.NavBar>
  );
};

export default NavBar;
