const InputValidator = {
  isNumber(input) {
    const numberPattern = /^[0-9]+$/;
    return numberPattern.test(input);
  },

  isDivisibleBy1000(input) {
    return Number(input) % 1000 === 0 && Number(input) !== 0;
  },

  validatePurchaseAmount(input) {
    if (!this.isNumber(input)) throw new Error('[ERROR] 숫자만 입력해주세요.');
    if (!this.isDivisibleBy1000(input))
      throw new Error(
        '[ERROR] 입력한 금액이 1000원으로 나누어떨어지지 않습니다. 다시 입력해주세요.',
      );
  },
};

export default InputValidator;
