import Lotto from '../domain/Lotto.js';
import LottoShop from '../domain/LottoShop.js';
import LottoYieldCalculator from '../domain/LottoYieldCalculator.js';
import LottosMatcher from '../domain/LottosMatcher.js';
import Money from '../domain/Money.js';
import Io from '../view/Io.js';

class LottoGame {
  async process() {
    const money = await this.#tryUntilSuccess(this.#requestMoney);
    const boughtLottos = this.#buyLottos(money);
    const winningLotto = await this.#tryUntilSuccess(this.#requestWinningLotto);
    const bonusNumber = await this.#tryUntilSuccess(() =>
      this.#requestBonusNumber(winningLotto),
    );
    const prizeCount = this.#calcPrizeCount(
      boughtLottos,
      winningLotto,
      bonusNumber,
    );

    this.#printLottoResult(prizeCount);
    this.#printYieldRate(money, prizeCount);
  }

  async #requestMoney() {
    const moneyRequest = await Io.requestMoney();
    const money = Money.create(moneyRequest);

    return money;
  }

  #buyLottos(money) {
    const lottos = LottoShop.buyLottos(money);

    Io.printLottoCount(lottos.length);

    Io.printLottos(lottos.map((lotto) => lotto.get()));

    return lottos;
  }

  async #requestWinningLotto() {
    const winningLottoRequest = await Io.requestWinningLotto();
    const winningLotto = new Lotto(winningLottoRequest);

    return winningLotto;
  }

  async #requestBonusNumber(winningLotto) {
    const bonusNumberRequest = await Io.requestBonusNumber();
    const bonusNumber = winningLotto.createBonusNumber(bonusNumberRequest);

    return bonusNumber;
  }

  #calcPrizeCount(boughtLottos, winningLotto, bonusNumber) {
    const lottoMatcher = new LottosMatcher();
    const prizeCount = lottoMatcher.calcPrizeCount(
      boughtLottos,
      winningLotto,
      bonusNumber,
    );

    return prizeCount;
  }

  #printLottoResult(prizeCount) {
    Io.printResultHeader();
    Io.printPrizeCount(prizeCount);
  }

  #printYieldRate(money, prizeCount) {
    const yieldRate = LottoYieldCalculator.getYieldRate(money, prizeCount);

    Io.printYieldRate(yieldRate);
  }

  async #tryUntilSuccess(callback) {
    let result;

    try {
      result = await callback();
    } catch (e) {
      Io.printError(e.message);
      result = await this.#tryUntilSuccess(callback);
    }

    return result;
  }
}

export default LottoGame;
