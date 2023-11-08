const Validator = {
  validatePrice(totalPrice) {
    const priceNumber = Number(totalPrice);
    if (Number.isNaN(priceNumber)) {
      throw new Error("[ERROR] 숫자만 입력해주세요. ");
    }
    if (priceNumber < 1000) {
      throw new Error("[ERROR] 1,000원 이상으로 입력해주세요. ");
    }
    if (priceNumber % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요. ");
    }
  },
};

export default Validator;
