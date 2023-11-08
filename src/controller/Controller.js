import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../view/View.js';
import Validator from '../validator/Validator.js';
import LottoGame from '../model/LottoGame.js';
import LottoCalculator from '../model/LottoCalculator.js';
import { INPUT_MESSAGE } from '../constant/InputMessage.js'
import { repeat } from '../util/repeat.js'

export default class Controller {
  #view
  #validator

  constructor() {
    this.#view = new View();
    this.#validator = new Validator();
  }

  async run() {
    const lottoGame = new LottoGame();

    const money = await this.getMoney();
    const lottos = await lottoGame.buyLottos(money);
    this.#view.printLottos(lottos);

    const win = await this.getWin();
    const bonus = await this.getBonus(win);

    const lottoCalculator = new LottoCalculator(money, win, bonus);
    const data = this.calculate(lottos, lottoCalculator);

    this.#view.printStatistics(data);
  }

  async getMoney() {
    const moneyString = await repeat(
      this.#view.readLine,
      INPUT_MESSAGE.MONEY,
      [
        this.#validator.checkIsNumber,
        this.#validator.checkIsGreaterThanThousand,
        this.#validator.checkIsThousandMultiple
      ]
    );

    return parseInt(moneyString);
  }
  
  async getWin() {
    const winString = await repeat(
      this.#view.readLine,
      INPUT_MESSAGE.WIN,
      [
        this.#validator.checkIsCommaSeparatedNumber,
        this.#validator.checkIsSixNumbers,
        this.#validator.checkIsCommaSeparatedNumberBetween1And45,
        this.#validator.checkIsUnique
      ]
    );

    return winString.split(',').map((element) => parseInt(element));
  }

  async getBonus(win) {
    let bonus

    while (true) {
      try {
        bonus = parseInt(await this.#view.readLine(INPUT_MESSAGE.BONUS));
        this.#validator.checkBonusIsNumber(bonus);
        this.#validator.checkIsBetween1And45(bonus);
        this.#validator.checkIsNotInWin(bonus, win);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return parseInt(bonus);
  }

  calculate(lottos, lottoCalculator) {
    const data = {};

    Object.assign(data, lottoCalculator.countMatchingLottos3To6(lottos));
    data.bonus = lottoCalculator.countBonusMatchingLottos(lottos);

    data.prize = lottoCalculator.getPrize(data);
    data.ratio = lottoCalculator.getRatio(data);

    return data;
  }
}
