export const CommonError = {
  numberError(isNumber) {
    if (isNaN(isNumber)) {
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
    if (isNumber < 1 || isNumber > 45) {
      throw new Error('[ERROR] 1~45 숫자가 아닙니다.');
    }
  },
};
