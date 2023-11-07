export const commonValidation = Object.freeze({
  isNumber: Object.freeze({
    errorMessage: `숫자타입이 아닙니다.`,
    isInvalid: (number) => {
      const regExp = /^-?\d+$/;
      return !regExp.test(number);
    }
  }),
  isInRangeOneToFourtyFive: Object.freeze({
    errorMessage: `1 ~ 45의 숫자가 아닙니다.`,
    isInvalid: (number) => {
      const regExp = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
      return !regExp.test(number);
    }
  }),
});
