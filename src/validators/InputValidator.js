import ValidatorUtil from "./ValidatorUtil.js";

class InputValidator {
	static purchaseAmountValidator(input) {
		const inputToNum = Number(input);

		ValidatorUtil.isNumber(inputToNum);
		ValidatorUtil.isPositiveNumber(inputToNum);
		ValidatorUtil.isCostValid(inputToNum);

		return inputToNum;
	}

	static lottoNumberValidator(input) {
		const inputToNumArr = input.split(",").map((item) => Number(item));

		ValidatorUtil.isLength(inputToNumArr);
		inputToNumArr.map((number) => {
			ValidatorUtil.isNumber(number);
			ValidatorUtil.isNumberInRange(number);
		});

		return inputToNumArr;
	}

	static bonusNumberValidator(input) {
		const inputToNum = Number(input);

		ValidatorUtil.isNumber(inputToNum);
		ValidatorUtil.isNumberInRange(inputToNum);

		return inputToNum;
	}
}

export default InputValidator;
