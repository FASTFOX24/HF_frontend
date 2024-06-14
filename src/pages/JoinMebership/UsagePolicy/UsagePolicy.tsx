import { useForm } from "react-hook-form";
import { policyList } from "../../../store/globalData";
import PolicyContent from "./PolicyContent/PolicyContent";
import * as S from "./styled";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { policySchema } from "../../../utils/membership";

type PolicyFieldName =
  | "essentialPolicy_1"
  | "essentialPolicy_2"
  | "essentialPolicy_3"
  | "essentialPolicy_4"
  | "essentialPolicy_5";
type FormValues = {
  [key: string]: boolean;
};
const UsagePolicy = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(policySchema),
    defaultValues: policyList.reduce((acc, policy, index) => {
      acc[`essentialPolicy_${index + 1}`] = false;
      return acc;
    }, {} as FormValues),
  });
  const [consentAll, setConsentAll] = useState<boolean>(false);
  const changeAll = () => {
    setConsentAll(!consentAll);
  };
  const clickNext = () => {
    console.log(errors.essentialPolicy_1?.message);
    console.log(errors.essentialPolicy_2?.message);
    console.log(errors.essentialPolicy_3?.message);
    console.log(errors.essentialPolicy_4?.message);
    console.log(errors.essentialPolicy_1?.message);
    // alert("이용약관 동의 후 가입이 가능합니다.");
  };
  const policies = policyList.map((policyData, index) => {
    const fieldName = `essentialPolicy_${index + 1}` as PolicyFieldName;
    return (
      <PolicyContent
        key={fieldName}
        policyData={policyData}
        consentAll={consentAll}
        fieldName={fieldName}
      />
    );
  });
  return (
    <S.Container>
      <S.ContentBox onSubmit={handleSubmit(clickNext)}>
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
        <S.DoneButton type={"submit"} usable={false}>
          계속
        </S.DoneButton>
      </S.ContentBox>
    </S.Container>
  );
};

export default UsagePolicy;
