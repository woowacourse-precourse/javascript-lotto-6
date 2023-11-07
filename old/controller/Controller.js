import View from '../../../src/view/View.js'
import LottoGame from '../../../src/model/LottoGame.js';
import LottoCalculator from '../../../src/model/LottoCalculator.js';

export default class Controller {
  #view;

  constructor() {
    this.#view = new View();
  }

  async run() {
    const lottoGame = new LottoGame();

    const money = await this.#view.inputRepeater(this.#view.getMoneyInput);
    const attempts = lottoGame.moneyToAttempts(money);
    const lottos = await lottoGame.buyLottos(attempts);

    this.#view.printLottos(lottos);

    const win = await this.#view.inputRepeater(this.#view.getWinInput);
    const bonus = await this.#view.inputRepeater(this.#view.getBonusInput, win);

    let data = {};
    data.money = money;
    const lottoCalculator = new LottoCalculator(win, bonus);
    data.matches3 = lottoCalculator.countMatchingLottos(lottos, 3);
    data.matches4 = lottoCalculator.countMatchingLottos(lottos, 4);
    data.matches5 = lottoCalculator.countMatchingLottos(lottos, 5);
    data.matchesBonus = lottoCalculator.countBonusMatchingLottos(lottos);
    data.matches6 = lottoCalculator.countMatchingLottos(lottos, 6);

    data.prize = lottoCalculator.sumPrize(data);
    data.ratio = lottoCalculator.getRatio(data);
    console.log(lottoCalculator.countMatchingLottos(lottos, 3));

    this.#view.printStatistics(data);
  }
}