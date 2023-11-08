const validate = {
  isValidateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  },
};

export default validate;
