import { Console, Random } from '@woowacourse/mission-utils';
import LottoData from '../models/LottoData.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoUtill from '../utils/LottoUtill.js';
import Lotto from '../Lotto.js';
import { CONSTANTS } from '../constants/constant.js';

class LottoController {
  constructor() {
    this.INPUT_VIEW = new InputView();
    this.OUTPUT_VIEW = new OutputView();
    this.LOTTO_DATA = new LottoData();
  }

  async inputPurchaseMoney() {
    this.LOTTO_DATA.getUserMoney(await this.INPUT_VIEW.purchaseMoney());
    if (this.LOTTO_DATA.userMoney === CONSTANTS.IS_ERROR) {
      return this.inputPurchaseMoney();
    }
    return this.#buyLotto();
  }

  async #buyLotto() {
    const CALC_BUY = new LottoUtill(this.LOTTO_DATA.userMoney);
    await this.#printLottoNumber(CALC_BUY.howManyToBuy());
  }

  async #printLottoNumber(canBuy) {
    this.OUTPUT_VIEW.userCanBuy(canBuy);
    await this.#lottoGenerator(canBuy);
    await this.#inputWinNumber();
  }

  async #lottoGenerator(canBuy) {
    if (canBuy > 0) {
      const generateNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lottoNumber = await Lotto.createLottoInstance(generateNumber);
      this.LOTTO_DATA.userNumber.push(generateNumber);
      this.OUTPUT_VIEW.userLottoNumber(lottoNumber.sortingNumber());
      await this.#lottoGenerator(canBuy - 1);
    }
  }

  async #inputWinNumber() {
    this.LOTTO_DATA.getWinNumber(await this.INPUT_VIEW.winLotteryNumber());
    try {
      await Lotto.createLottoInstance(this.LOTTO_DATA.winNumber);
      return this.#inputBonusNumber();
    } catch (error) {
      Console.print(error.message);
      return this.#inputWinNumber();
    }
  }

  async #inputBonusNumber() {
    this.LOTTO_DATA.getBonusNumber(await this.INPUT_VIEW.bonusNumber());
    if (this.LOTTO_DATA.bonusNumber === CONSTANTS.IS_ERROR) {
      return this.#inputBonusNumber();
    }
    return this.#printStatistic();
  }

  async #printStatistic() {
    const clacStatic = new LottoUtill();
    const lottoStatic = await clacStatic.checkLottoCorrect(
      this.LOTTO_DATA.userNumber,
      this.LOTTO_DATA.winNumber,
      this.LOTTO_DATA.bonusNumber,
    );
    this.OUTPUT_VIEW.lottoStatic(lottoStatic);
    this.#printRate(lottoStatic);
  }

  async #printRate(lottoStatic) {
    const rateUtill = new LottoUtill(this.LOTTO_DATA.userMoney, lottoStatic);
    this.OUTPUT_VIEW.totalRevenue(rateUtill.getRate());
  }
}

export default LottoController;
