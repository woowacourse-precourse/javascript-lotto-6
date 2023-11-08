import { Console } from "@woowacourse/mission-utils";
import LottoPurchase from "./LottoPurchase";
import Lotto from "./Lotto";
import BonusNumValidator from "./ BonusNumValidator";
import Game from "./Game";
import LottoPurchaseAmountValidator from "./  LottoPurchaseAmountValidator";
import { GAME_MESSAGE } from "./constants/constant";

class App {
  async play() {
    const lottoPurchaseAmountValidator = new LottoPurchaseAmountValidator();
    await lottoPurchaseAmountValidator.getPurchaseAmount();
    const purchaseAmount = lottoPurchaseAmountValidator.purchaseAmount;
    Console.print("\n");

    const lottoPurchase = new LottoPurchase(purchaseAmount / 1000);
    const purchasedLottoList = lottoPurchase.purchasedLottoList;
    Console.print("\n");

    const inputWinnerLotto = await Console.readLineAsync(
      GAME_MESSAGE.promptWinnerLotto
    );
    Console.print(inputWinnerLotto);
    const lotto = new Lotto(
      inputWinnerLotto.split(",").map((num) => Number(num))
    );
    const winnerLotto = lotto.numbers;
    Console.print("\n");

    const bonusNumValidator = new BonusNumValidator(winnerLotto);
    await bonusNumValidator.getBonusNum();

    await new Game(
      purchasedLottoList,
      winnerLotto,
      bonusNumValidator.bonusNum,
      purchaseAmount
    );
  }
}

export default App;
