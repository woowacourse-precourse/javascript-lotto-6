const validator = {
  validatePrice(price) {
    if (price % 1000 !== 0) throw new Error("[ERROR] 당첨 금액은 1000원 단위로 입력해주세요.");
  },
};

export default validator;
