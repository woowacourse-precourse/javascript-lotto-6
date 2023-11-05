import { Console } from '@woowacourse/mission-utils';
import LottoShop from '../domain/LottoShop.js';
import LottosMatcher from '../domain/LottosMatcher.js';
import Money from '../domain/Money.js';
import calcTotalIncome from '../utils/calcTotalIncome.js';
import calcYieldPercent from '../utils/calcYieldPercent.js';
import Io from '../view/Io.js';

class LottoGame {
  // TODO: 프로세스 분리
  static async process() {
    const moneyRequest = await Io.requestMoney();

    const money = Money.create(moneyRequest);
    // TODO: count 각자에게서 나누면 두번 일하는거라 리펙토링 필요

    Io.printLottoCount(money.getMoney());

    const lottos = LottoShop.buyLottos(money);
    Io.printLottos(lottos);

    // const selectedLotto = await this.#test();
    const selectedLotto = await Io.requestLotto();
    // TODO: 리펙토링
    const bonusInput = await Io.requestBonusNumber();

    Io.printResultHeader();
    const lottoMatcher = new LottosMatcher();
    const matchResults = lottoMatcher.matchResults(
      lottos,
      parseInt(bonusInput, 10),
      selectedLotto.split(',').map(Number),
    );

    Io.printMatchResults(matchResults);

    // Io.printMatchResults(matchResults);
    // Io.print(matchResults);
    const totalIncome = calcTotalIncome(matchResults);
    const yieldPercent = calcYieldPercent(money.getMoney(), totalIncome);

    Io.printYieldPercent(yieldPercent);
  }

  // static async #test() {
  //   const selectedLotto = await Io.requestLotto();
  //   return selectedLotto;
  // }

  // static async #buyLotto() {

  // }

  // static async #requestLotto() {
  //   return Io.requestLotto();
  // }
}

export default LottoGame;

LottoGame.process();
