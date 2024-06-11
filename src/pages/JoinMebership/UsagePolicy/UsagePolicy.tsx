import { policyList } from "../../../store/globalData";
import PolicyContent from "./PolicyContent/PolicyContent";
import * as S from "./styled";
import React, { useState } from "react";

const UsagePolicy = () => {
  const [consentAll, setConsentAll] = useState<boolean>(false);
  const changeAll = () => {
    setConsentAll(!consentAll);
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
        <S.DoneButton disabled>계속</S.DoneButton>
      </S.ContentBox>
    </S.Container>
  );
};

export default UsagePolicy;
