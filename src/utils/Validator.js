import ERROR_MESSAGE from "../constant/ErrorMessage";

const Validator = {
  InputPurchaseAmount(purchaseAmount) {
    if (purchaseAmount.replace(/\d/g, "").length > 0)
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_NUMBER);

    if (purchaseAmount < 1000)
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_UNDER);

    if (purchaseAmount % 1000 !== 0)
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_UNIT);

    if (purchaseAmount.replace(/0/g, "").length === 0)
      throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_ZERO);
  },
};

export default Validator;
