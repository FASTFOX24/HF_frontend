import { useNavigate } from "react-router";
import { policyList } from "../../../store/globalData";
import PolicyContent from "./PolicyContent/PolicyContent";
import * as S from "./styled";
import React, { useState } from "react";

type FormValues = {
  [key: string]: boolean;
};

const UsagePolicy = () => {
  const navigate = useNavigate();
  const [consentAll, setConsentAll] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState(
    policyList.reduce((acc, _, index) => {
      acc[`essentialPolicy_${index + 1}`] = false;
      return acc;
    }, {} as FormValues)
  );
  const changePolicyState = (state: boolean, fieldName: string) => {
    defaultValues[fieldName] = state;
    setDefaultValues({ ...(defaultValues as any) });
  };
  const changeAll = () => {
    setConsentAll(!consentAll);
    Object.keys(defaultValues).forEach((key) => {
      defaultValues[key] = !consentAll;
    });
    setDefaultValues({ ...defaultValues });
  };
  const clickNext = () => {
    const values = Object.values(defaultValues);
    const hasFalseValue = values.slice(0, 5).some((value) => value === false);
    if (hasFalseValue) {
      alert("You can join after agreeing to the required terms and conditions");
    } else {
      navigate("/auth/join_membership");
    }
  };
  const policies = policyList.map((policyData, index) => {
    const fieldName = `essentialPolicy_${index + 1}`;
    return (
      <PolicyContent
        key={fieldName}
        policyData={policyData}
        fieldName={fieldName}
        policyState={defaultValues[`essentialPolicy_${index + 1}`]}
        changePolicyState={changePolicyState}
      />
    );
  });
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
        <S.DoneButton onClick={clickNext}>계속</S.DoneButton>
      </S.ContentBox>
    </S.Container>
  );
};

export default UsagePolicy;
