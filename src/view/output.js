import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants/Message.js";

export const printError = (errorMessage) => {
	Console.print(errorMessage);
};

export const printLottoCount = (number) => {
	Console.print(OUTPUT_MESSAGES.OUTPUT_LOTTO_COUNT(number));
};

export const printLotto = (lotto) => {
	Console.print(`[${lotto.toString().replaceAll(",", ", ")}]`);
};
export const printResultIntro = () => {
	Console.print(OUTPUT_MESSAGES.OUTPUT_RESULT_INTRO);
};

export const printRanking = (rank, rankCount) => {
	Console.print(`${OUTPUT_MESSAGES.OUTPUT_MATCH_COUNT[rank]} ${rankCount}개`);
};

export const printIncomeRate = (incomeRate) => {
	Console.print(`총 수익률은 ${incomeRate}%입니다.`);
};
