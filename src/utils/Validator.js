const Validator = {
  InputPurchaseAmount(purchaseAmount) {
    if (purchaseAmount.replace(/\d/g, "").length > 0)
      throw new Error("[ERROR] 구입 금액은 숫자만 입력할 수 있습니다.");

    if (purchaseAmount < 1000)
      throw new Error(
        "[ERROR] 구입 금액은 1000원 이상부터 로또 구입이 구입 가능합니다."
      );

    if (purchaseAmount % 1000 !== 0)
      throw new Error(
        "[ERROR] 구입 금액은 1000원 단위로 로또를 구입해야 합니다."
      );

    if (purchaseAmount.replace(/0/g, "").length === 0)
      throw new Error("[ERROR] 구입 금액은 0원이 될 수 없습니다.");
  },
};

export default Validator;
