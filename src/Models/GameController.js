import { Console } from '@woowacourse/mission-utils';
import LOTTO from '../../constants/lotto';
import loopRead from '../../utils/loopRead';
import { MESSAGE } from '../../constants/message';
import View from '../View/View';
import LottoCompany from './LottoCompany';

class GameController {
  #lottoCompany = new LottoCompany();
  #view = new View();

  async purchaseLotto() {
    const money = await loopRead(this.#view.readMoney);
    const numOfLottos = money / LOTTO.price;
    const lottos = this.#lottoCompany.issueLottos(numOfLottos);
    this.#view.printLottos(lottos);
    return lottos;
  }

  async generateWinningNumbers() {
    const winningNumbers = await loopRead(this.#view.readWinningNumbers);
    this.#lottoCompany.numbers = winningNumbers;
    const bonusNumber = await loopRead(this.#view.readBonusNumber);
    this.#lottoCompany.bonusNumber = bonusNumber;
  }

  printResult(lottos) {
    const statistics = this.#lottoCompany.calculateStatistics(lottos);
    const rateOfReturn = this.#lottoCompany.calculateRateOfReturn(lottos);
    Console.print(MESSAGE.statistic);
    Console.print(MESSAGE.line);
    this.#view.printStatistics(statistics);
    this.#view.printRateOfReturn(rateOfReturn);
  }
}

export default GameController;
