import { Console } from "@woowacourse/mission-utils";
import { LOTTO, ERROR_MESSAGE } from "./Constant.js";

const isVaildAmount = (amount) => {
	throwError(!isValidNumber(amount), ERROR_MESSAGE.invalidInputNumber);
	throwError(isDivisibleBy1000(amount), ERROR_MESSAGE.invalidInputAmount);
};

const isVaildLottoNumbers = (numList) => {
	throwError(isSix(numList), ERROR_MESSAGE.invalidNumbersCount);
	throwError(isDuplicate(numList), ERROR_MESSAGE.duplication);
	throwError(!isValidNumlist(numList), ERROR_MESSAGE.invalidInputNumber);
	throwError(isValidNumrange(numList), ERROR_MESSAGE.invalidNumberRange);
};

const isVaildBonusNum = (bonus) => {
	try {
		throwError(!isValidNumber(bonus), ERROR_MESSAGE.invalidInputNumber);
		//당첨번호와 중복
	} catch (error) {
		Console.print(error);
		return false;
	}
	return true;
};

const isValidNumber = (value) => {
	const numType = Number(value);
	if (numType < 1) return false;
	return Number.isInteger(numType) && !Number.isNaN(numType);
};

const isDivisibleBy1000 = (amount) => !Math.floor(Number(amount) / LOTTO.cost);

const isDuplicate = (numList) => new Set(numList).size !== LOTTO.count;

const isSix = (numList) => numList.length !== LOTTO.count;

const isValidNumlist = (numList) => numList.every((num) => isValidNumber(num));

const isValidNumrange = (numList) => !numList.every((num) => 0 < num && num < 46);

const throwError = (statement, message) => {
	if (statement) throw new Error(message);
};

export { isVaildAmount, isVaildLottoNumbers, isVaildBonusNum };
