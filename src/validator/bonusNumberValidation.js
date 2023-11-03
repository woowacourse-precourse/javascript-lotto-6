export const bonusNumberValidation = bonusNumber => {
  Object.values(bonusNumberValidation.validation).forEach(({ errorMessage, isInvalid }) => {
    if(isInvalid(bonusNumber)) throw new Error (errorMessage);
    },
  );
};

bonusNumberValidation.validation = Object.freeze({
  limitedBonusNumber: Object.freeze({
  errorMessage: '1~45 사이의 숫자만 입력해 주세요.',
  isInvalid(bonusNumber) {
    if (bonusNumber < 1 && bonusNumber > 45)
    return true;
    }
  }),

})  

export default bonusNumberValidation;