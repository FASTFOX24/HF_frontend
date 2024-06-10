import * as S from "./styled";
import React from "react";
import NavBar from "./NavBar/NavBar";
import theme from "../../styles/theme";
import { useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { menuList } from "../../store/globalData";
import { Twirl as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const asdf = () => {
    // 추후에 삭
    signOut(auth);
    window.location.reload();
    console.log("로그아웃 완료");
  };
  const menuBtns = menuList.map((btnData) => (
    <S.MenuBtn
      key={`meneBtn_${btnData.btnName}`}
      auth={btnData.auth}
      signin={btnData.signin}
      onClick={() => {
        navigate(btnData.path);
      }}
    >
      {btnData.btnName}
    </S.MenuBtn>
  ));
  return (
    <S.HeaderContainer $isOpen={isOpen}>
      <S.HeaderBody>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <S.Health>Health</S.Health>
          <S.Friend>Friend</S.Friend>
        </button>
        <S.MenuBox>{menuBtns}</S.MenuBox>
        <S.HamburgerBox>
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setIsOpen}
            direction="right"
            color={theme.color.gray.black}
            size={20}
          />
        </S.HamburgerBox>
      </S.HeaderBody>
      <NavBar isOpen={isOpen} />
      <button onClick={asdf}>asdfasdf</button>
    </S.HeaderContainer>
  );
};
export default Header;
