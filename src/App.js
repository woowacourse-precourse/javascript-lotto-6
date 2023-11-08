import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import View from "./View.js";
import Controller from "./Controller.js";

class App {
  async play() {
    const view = new View();
    const controller = new Controller();

    const LOTTO_AMOUNT = await view.inputLottoPrice();
    const ARRAY_LOTTOS = controller.pickLottoNumbers(LOTTO_AMOUNT);

    view.printLottoNumbers(LOTTO_AMOUNT, ARRAY_LOTTOS)

    const LOTTO_NUMBERS = await view.inputLottoNumbers();
    const BONUS_NUMBER = await view.inputBonusNumber();

    const DIFFERENCE = controller.checkWinnerNumbers(ARRAY_LOTTOS, LOTTO_NUMBERS, BONUS_NUMBER);
    const WINNER_TOTAL = controller.checkWinnerAmounts(ARRAY_LOTTOS, DIFFERENCE);

    view.printLottoStat(WINNER_TOTAL);
    view.printLottoRate(LOTTO_AMOUNT, WINNER_TOTAL);



  }
}
export default App;
