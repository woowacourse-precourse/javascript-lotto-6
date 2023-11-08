import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";
import { ONE_LOTTO_PRICE } from "./constants/lottoNumbers.js";

export class Output {
  printHowManyLotto(money) {
    const howManyLotto = money / ONE_LOTTO_PRICE;

    Console.print(`${"\n"}${howManyLotto}${MESSAGES.YOU_BOUGHT}`);
  }

  printMyLotto(lottos) {
    let result = "";

    lottos.forEach((lotto) => {
      result += `[${lotto.join(", ")}]${"\n"}`;
    });

    Console.print(result);
  }

  printFinalResult(lottoBoard) {
    Console.print("");
    Console.print(`${MESSAGES.WINNING_STASTISTICS}`);
    Console.print("---");
    Console.print(`${MESSAGES.THREE_COINCIDE}${lottoBoard.threeSame}개`);
    Console.print(`${MESSAGES.FOUR_COINCIDE}${lottoBoard.fourSame}개`);
    Console.print(`${MESSAGES.FIVE_COINCIDE}${lottoBoard.fiveSame}개`);
    Console.print(
      `${MESSAGES.FIVE_AND_BONUS_COINCIDE}${lottoBoard.fiveAndBonusSame}개`
    );
    Console.print(`${MESSAGES.ALL_COINCIDE}${lottoBoard.sixSame}개`);
    Console.print(`총 수익률은 ${lottoBoard.rateOfReturn}%입니다.`);
  }
}
