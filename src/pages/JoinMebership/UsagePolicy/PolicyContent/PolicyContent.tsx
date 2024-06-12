import React, { useEffect, useState } from "react";
import * as S from "./styled";

interface PolicyContentProps {
  policyData: {
    btnName: string;
    essential: boolean;
    path: string;
  };
  consentAll: boolean;
}
const PolicyContent = ({ policyData, consentAll }: PolicyContentProps) => {
  const [consentState, setConsentState] = useState<boolean>(false);
  const changeState = () => {
    setConsentState(!consentState);
  };
  useEffect(() => {
    setConsentState(consentAll);
  }, [consentAll]);
  return (
    <S.Box_1_1>
      <S.Box_1_1_1>
          {consentState ? (
            <S.CheckIcon onClick={changeState} />
          ) : (
            <S.NonCheckIcon onClick={changeState} />
          )}
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
