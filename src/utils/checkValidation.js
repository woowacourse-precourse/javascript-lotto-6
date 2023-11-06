import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./Constant.js";

const isVaildAmount = (amount) => {
	const amountVal = Number(amount);

	try {
		if (Number.isNaN(amountVal))
			throw new Error(ERROR_MESSAGE.invalidInputNumber);
		if (!Math.floor(amountVal / 1000))
			throw new Error(ERROR_MESSAGE.invalidInputAmount);
	} catch (error) {
		Console.print(error);
		return false;
	}
	return true;
};

export { isVaildAmount };
