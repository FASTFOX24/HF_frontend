import React from "react";
import * as S from "./styled";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import theme from "../../styles/theme";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const asdf = () => {
    signOut(auth);
    window.location.reload();
    console.log("로그아웃 완료");
  };
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
        <Hamburger
          rounded
          toggled={isOpen}
          toggle={setIsOpen}
          direction="right"
          color={theme.color.gray.black}
          size={20}
        />
      </S.HeaderBody>
      <NavBar isOpen={isOpen} />
      <button onClick={asdf}>asdfasdf</button>
    </S.HeaderContainer>
  );
};
export default Header;
