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
}
