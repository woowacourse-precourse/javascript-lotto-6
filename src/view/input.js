import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/Message.js";

export const inputMoney = () => {
	return Console.readLineAsync(INPUT_MESSAGES.INPUT_MONEY);
};

export const inputWinningNumber = () => {
	return Console.readLineAsync(INPUT_MESSAGES.INPUT_WINNING_NUMBER);
};

export const inputBonusNumber = () => {
	return Console.readLineAsync(INPUT_MESSAGES.INPUT_BONUS_NUMBER);
};
