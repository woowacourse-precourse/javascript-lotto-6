import { Console } from '@woowacourse/mission-utils';
import LottoCompany from './Models/LottoCompany';
import View from './View/View';
import LOTTO from '../constants/lotto';
import { MESSAGE } from '../constants/message';

class App {
  #lottoCompany = new LottoCompany();
  #view = new View();

  async play() {
    const money = await this.#view.readMoney();
    const numOfLottos = money / LOTTO.price;
    const lottos = this.#lottoCompany.issueLottos(numOfLottos);
    this.#view.printLottos(lottos);

    const winningNumbers = await this.#view.readWinningNumbers();
    this.#lottoCompany.numbers = winningNumbers;

    const bonusNumber = this.#view.readBonusNumber();
    this.#lottoCompany.pushBonus(bonusNumber);

    const statistics = this.#lottoCompany.calculateStatistics(lottos);
    const rateOfReturn = this.#lottoCompany.calculateRateOfReturn(lottos);

    Console.print(MESSAGE.statistic);
    Console.print(MESSAGE.line);
    this.#view.printStatistics(statistics);
    this.#view.printRateOfReturn(rateOfReturn);
  }
}

export default App;
