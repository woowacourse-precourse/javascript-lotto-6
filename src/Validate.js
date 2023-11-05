const Validate = {
  checkPurchaseAmount(price) {
    if (price < 1000) {
      throw new Error('[ERROR] 구입 금액은 최소 1000원 이상이어야 합니다.');
    } else if (price % 1000) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위여야 합니다.');
    }
  },
};
export default Validate;
