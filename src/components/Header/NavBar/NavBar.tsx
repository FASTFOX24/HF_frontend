import * as S from "./styled";
import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { getData } from "../../../apis/aip";
import { addComma } from "../../../utils/etc";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { onAuthStateChanged } from "firebase/auth";
import { navBarList, userData } from "../../../store/globalData";
interface NavBarProps {
  isOpen: boolean;
}
const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userData);
  const list = navBarList.map((btn) => (
    <S.NavBtn_1
      key={`navBtn_${btn.btnName}`}
      onClick={() => {
        navigate(btn.path);
      }}
    >
      {btn.btnName}
    </S.NavBtn_1>
  ));
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
    <S.Container>
      <S.Background $isOpen={isOpen} />
      <S.NavBar $isOpen={isOpen}>
        {user?.uid ? (
          <S.LoginBox>
            <S.ProfileBtn>
              <S.UserIcon />
              {/* <S.DisplayName>{userInfo.displayName}</S.DisplayName> */}
            </S.ProfileBtn>
          </S.LoginBox>
        ) : (
          <S.LoginBox>
            <S.LoginCaption>
              로그인 후 이용하시면 <br /> 할인 쿠폰과 추가 혜택을 받을 수
              있어요.
            </S.LoginCaption>
            <S.LoginBtn
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              로그인
            </S.LoginBtn>
          </S.LoginBox>
        )}
        <S.BenefitBox>
          <S.BenfitContent>
            {/* {user?.uid ? addComma(userInfo.point) : "-"} */}
            <br />
            포인트
          </S.BenfitContent>
          <S.Divider />
          <S.BenfitContent>
            {/* {!user?.uid
              ? "-"
              : !userInfo.coupon
              ? "0 개"
              : Object.keys(userInfo.coupon).length + " 개"} */}
            <br />
            할인쿠폰
          </S.BenfitContent>
        </S.BenefitBox>
        {list}
      </S.NavBar>
    </S.Container>
  );
};

export default NavBar;
