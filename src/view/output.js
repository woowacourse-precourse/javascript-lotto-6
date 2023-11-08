import { Console } from "@woowacourse/mission-utils";

export const printError = (errorMessage) => {
	return Console.readLineAsync(errorMessage);
};
