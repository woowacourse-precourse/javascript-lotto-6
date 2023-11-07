import { Console } from "@woowacourse/mission-utils";
import { LOTTO, ERROR_MESSAGE } from "./Constant.js";

const isVaildAmount = (amount) => {
	try {
		if (isNotaNumber(amount)) throw new Error(ERROR_MESSAGE.invalidInputNumber);
		if (!Math.floor(Number(amount) / LOTTO.cost))
			throw new Error(ERROR_MESSAGE.invalidInputAmount);
	} catch (error) {
		Console.print(error);
		return false;
	}
	return true;
};

const isNotaNumber = (value) => Number.isNaN(Number(value));

export { isVaildAmount };
