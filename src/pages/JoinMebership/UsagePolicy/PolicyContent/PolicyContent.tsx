import React from "react";
import * as S from "./styled";

interface PolicyContentProps {
  policyData: {
    btnName: string;
    essential: boolean;
    path: string;
  };
  fieldName: string;
  policyState: boolean;
  changePolicyState: (state: boolean, fieldName: string) => void;
}
const PolicyContent: React.FC<PolicyContentProps> = ({
  policyData,
  fieldName,
  policyState,
  changePolicyState,
}: PolicyContentProps) => {
  const changeState = () => {
    changePolicyState(!policyState, fieldName);
  };
  return (
    <S.Box_1_1>
      <S.Box_1_1_1>
        {policyState ? (
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
