import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoDraw from "./LottoDraw.js";
import {
  inputBonusNumber,
  inputPurchasePrice,
  inputWinningNumbers,
} from "./input/index.js";

class App {
  async play() {
    const purchasePrice = await inputPurchasePrice();
    Console.print("");

    const lottoQuantity = Lotto.calculateQuantityFromPrice(purchasePrice);
    Console.print(`${lottoQuantity}개를 구매했습니다.`);

    const lottos = Lotto.generateLottos(lottoQuantity);
    lottos.forEach((lotto) => lotto.printNumbers());
    Console.print("");

    const winningNumbersString = await inputWinningNumbers();
    const winningNumbers = winningNumbersString
      .split(",")
      .map((str) => Number(str));
    Console.print("");

    const bonusNumber = await inputBonusNumber(winningNumbersString);
    Console.print("");

    LottoDraw.printResult({
      lottos,
      winningNumbers,
      bonusNumber,
      purchasePrice,
    });
  }
}

export default App;
