const Validator = {
  validatePrice(totalPrice) {
    const priceNumber = Number(totalPrice);
    if (Number.isNaN(priceNumber)) {
      throw new Error("[ERROR] 숫자만 입력해주세요. ");
    }
  },
};

export default Validator;
