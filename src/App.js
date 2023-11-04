import { Console } from '@woowacourse/mission-utils';
import LottoCompany from './Models/LottoCompany';
import View from './View/View';
import LOTTO from '../constants/lotto';
import { MESSAGE } from '../constants/message';
import loopRead from '../utils/loopRead';

class App {
  #lottoCompany = new LottoCompany();
  #view = new View();

  async play() {
    const money = await loopRead(this.#view.readMoney);
    const numOfLottos = money / LOTTO.price;
    const lottos = this.#lottoCompany.issueLottos(numOfLottos);
    this.#view.printLottos(lottos);

    const winningNumbers = await loopRead(this.#view.readWinningNumbers);
    this.#lottoCompany.numbers = winningNumbers;

    const bonusNumber = await loopRead(this.#view.readBonusNumber);
    this.#lottoCompany.bonusNumber = bonusNumber;

    const statistics = this.#lottoCompany.calculateStatistics(lottos);
    const rateOfReturn = this.#lottoCompany.calculateRateOfReturn(lottos);
    Console.print(MESSAGE.statistic);
    Console.print(MESSAGE.line);
    this.#view.printStatistics(statistics);
    this.#view.printRateOfReturn(rateOfReturn);
  }
}

export default App;
