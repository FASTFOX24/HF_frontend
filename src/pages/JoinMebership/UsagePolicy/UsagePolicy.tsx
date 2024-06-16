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
    Object.values(defaultValues).forEach((value, index) => {
        console.log(index)
      if (!value) {
        // alert("이용약관 동의 후 가입이 가능합니다.");
        return;
      } else if (index === 4) {
        
      }
    });
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
        <S.DoneButton onClick={clickNext}>
          계속
        </S.DoneButton>
      </S.ContentBox>
    </S.Container>
  );
};

export default UsagePolicy;
