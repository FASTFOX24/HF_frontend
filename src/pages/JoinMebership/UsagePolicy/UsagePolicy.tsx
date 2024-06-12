import { useForm } from "react-hook-form";
import { policyList } from "../../../store/globalData";
import PolicyContent from "./PolicyContent/PolicyContent";
import * as S from "./styled";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { policySchema } from "../../../utils/membership";

const UsagePolicy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(policySchema),
  });
  const [consentAll, setConsentAll] = useState<boolean>(false);
  const changeAll = () => {
    setConsentAll(!consentAll);
  };
  const clickNext = () => {
    alert("이용약관 동의 후 가입이 가능합니다.");
  };
  const policies = policyList.map((policyData) => (
    <PolicyContent policyData={policyData} consentAll={consentAll} />
  ));
  return (
    <S.Container>
      <S.ContentBox>
        <S.Title>이용약관 동의</S.Title>
        <S.Box_1>
          <S.Box_1_1>
            <S.Box_1_1_1>
              {consentAll ? (
                <S.CheckIcon onClick={changeAll} />
              ) : (
                <S.NonCheckIcon onClick={changeAll} />
              )}
              <S.JustAgree>모두 확인, 동의합니다.</S.JustAgree>
            </S.Box_1_1_1>
          </S.Box_1_1>
          <S.Divider />
          <S.Box_1_2>{policies}</S.Box_1_2>
        </S.Box_1>
        <S.DoneButton usable={false} onClick={clickNext}>
          계속
        </S.DoneButton>
      </S.ContentBox>
    </S.Container>
  );
};

export default UsagePolicy;
