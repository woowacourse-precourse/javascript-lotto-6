export const bonusNumberValidation = bonusNumber => {
  Object.values(bonusNumberValidation.validation).forEach(({ errorMessage, isInvalid }) => {
    if(isInvalid(bonusNumber)) throw new Error (errorMessage);
    },
  )
}

bonusNumberValidation.validation = Object.freeze({
  limitedBonusNumber: Object.freeze({
  errorMessage: '[ERROR]1~45 사이의 숫자만 입력해 주세요.',
  isInvalid(bonusNumber) {
    if (bonusNumber < 1 && 45 < 
bonusNumber)
    return true;
    }
  })
})  

export default bonusNumberValidation;