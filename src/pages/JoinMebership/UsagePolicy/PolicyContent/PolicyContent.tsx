import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { Controller, useForm } from "react-hook-form";
import { policySchema } from "../../../../utils/membership";
import { yupResolver } from "@hookform/resolvers/yup";

type PolicyFieldName =
  | "essentialPolicy_1"
  | "essentialPolicy_2"
  | "essentialPolicy_3"
  | "essentialPolicy_4"
  | "essentialPolicy_5";

interface PolicyContentProps {
  policyData: {
    btnName: string;
    essential: boolean;
    path: string;
  };
  consentAll: boolean;
  fieldName: PolicyFieldName;
}

const PolicyContent: React.FC<PolicyContentProps> = ({
  policyData,
  consentAll,
  fieldName,
}: PolicyContentProps) => {
  const { control, setValue, watch } = useForm({
    resolver: yupResolver(policySchema),
  });
  const [consentState, setConsentState] = useState<boolean>(false);
  const changeState = () => {
    setConsentState(!consentState);
  };
  useEffect(() => {
    setValue(fieldName, consentAll);
  }, [consentAll, fieldName, setValue]);
  useEffect(() => {
    setConsentState(consentAll);
  }, [consentAll]);
  return (
    <S.Box_1_1>
      <S.Box_1_1_1>
        <Controller
          control={control}
          name={fieldName}
          render={({ field }) =>
            field.value ? (
              <S.CheckIcon onClick={() => field.onChange(false)} />
            ) : (
              <S.NonCheckIcon onClick={() => field.onChange(true)} />
            )
          }
        />
        <S.PolicyTitle>{policyData.btnName}</S.PolicyTitle>
        {policyData.essential ? (
          <S.Essential>{`(필수)`}</S.Essential>
        ) : (
          <S.NonEssential>{`(선택)`}</S.NonEssential>
        )}
      </S.Box_1_1_1>
      <S.DetailBtn>보기</S.DetailBtn>
    </S.Box_1_1>
  );
};

export default PolicyContent;
