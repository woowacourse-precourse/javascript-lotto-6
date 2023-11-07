import { Console } from "@woowacourse/mission-utils";
import { LOTTO, ERROR_MESSAGE } from "./Constant.js";

const isVaildAmount = (amount) => {
	try {
		if (!isInvalidNumber(amount))
			throw new Error(ERROR_MESSAGE.invalidInputNumber);
		if (!Math.floor(Number(amount) / LOTTO.cost))
			throw new Error(ERROR_MESSAGE.invalidInputAmount);
	} catch (error) {
		Console.print(error);
		return false;
	}
	return true;
};

const isVaildLottoNumbers = (numList) => {
	if (numList.length !== LOTTO.count)
		throw new Error(ERROR_MESSAGE.invalidNumbersCount);

	if (new Set(numList).size !== LOTTO.count)
		throw new Error(ERROR_MESSAGE.duplication);

	if (numList.some((num) => isInvalidNumber(num)))
		throw new Error(ERROR_MESSAGE.invalidInputNumber);

	if (!numList.every((num) => 0 < num && num < 46))
		throw new Error(ERROR_MESSAGE.invalidNumberRange);
};

const isInvalidNumber = (value) => {
	const numType = Number(value);
	if (numType < 0) return false;
	return Number.isInteger(numType) && !Number.isNaN(numType);
};

export { isVaildAmount, isVaildLottoNumbers };
