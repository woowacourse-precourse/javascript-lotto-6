import Lotto from "./Lotto.js";
import { LottoService } from "./model/LottoService.js";
import { InputView } from "./views/InputView.js";
import { OutputView } from "./views/OutputView.js";
import { Validator } from "./utils/Validator.js";
import { Random } from "@woowacourse/mission-utils";

class LottoGame {

  async start() {
    const price = await this.#handleInput(InputView.price, Validator.checkMoney);
    const count = LottoService.purchase(price);
    OutputView.count(count);
    const lottos = this.make(count);
    const winningNumber = await this.#handleInput(InputView.win, Validator.checkSixNumber);
    const bonusNumber = await this.#handleInput(InputView.bonus, Validator.checkIsNumber);
    this.result(lottos, winningNumber, bonusNumber, price);
  }

  async #handleInput(inputView, validator) {
    const input = await inputView();
    if (!validator(input)) return this.#handleInput(inputView, validator);
    return input;
  }

  make(count) {
    const lottos = Array.from({ length: count }, () => (new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))));
    lottos.forEach((lotto) => OutputView.makeLottos(lotto.getNumbers()));
    return lottos;
  }

  result(lottos, winningNumber, bonusNumber, price) {
    const rankingResult = LottoService.calculateRanking(lottos, winningNumber, bonusNumber);
    const profitResult = LottoService.calculateProfit(price, rankingResult);
    OutputView.result(rankingResult);
    OutputView.profit(profitResult);
  }
}

export default LottoGame;