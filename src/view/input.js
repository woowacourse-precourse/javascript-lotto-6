import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/Message.js";

export const inputMoney = () => {
	return Console.readLineAsync(INPUT_MESSAGES.INPUT_MONEY);
};
