import React from "react";
import * as S from "./styled";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

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
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color={"black"}
            size={20}
          />
          <S.TitleBtn
            onClick={() => {
              navigate("/");
            }}
          >
            Health Friend
          </S.TitleBtn>
          <S.SearchBtn>
            <S.SearchIcon />
          </S.SearchBtn>
        </S.HeaderBody>
        <NavBar isOpen={isOpen} />
        {/* <button onClick={asdf}>asdfasdf</button> */}
      </S.HeaderContainer>
  );
};
export default Header;
