import PurchaseAmount from "./PurchaseAmountValidation.js";

const LottoGameValidator = {

	/** 구입금액에 대하여 유효성검사를 수행한다. */
  validatePurchaseAmount(value) {
		PurchaseAmount.validate(value);
  }
}

export default LottoGameValidator;
