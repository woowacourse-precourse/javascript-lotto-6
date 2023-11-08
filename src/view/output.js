import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants/Message.js";

export const printError = (errorMessage) => {
	Console.print(errorMessage);
};

export const printLottoCount = (number) => {
	Console.print(OUTPUT_MESSAGES.OUTPUT_LOTTO_COUNT(number));
};
