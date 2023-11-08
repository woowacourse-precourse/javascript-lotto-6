import { Console } from '@woowacourse/mission-utils';
import CONFIG from '../constants/config.js';
import calculator from '../utils/calculator.js';
import LOTTO_VIEW from '../views/lottoView.js';
import LottosModel from '../models/LottosModel.js';
import CorrectNumbersModel from '../models/CorrectNumbersModel.js';
import BonusNumberModel from '../models/BonusNumberModel.js';
import TotalBuyPriceModel from '../models/TotalBuyPriceModel.js';

class LottoController {
  #totalBuyPriceModel;

  #correctNumbersModel;

  #bonusNumberModel;

  #lottosModel = new LottosModel();

  async start() {
    await this.processUserInputs();

    this.calculateLotto();
    this.resultPrint();
  }

  // prettier-ignore
  async processUserInputs() {
    await this.getAndCheckTotalBuyPrice();
    this.#lottosModel.setTotalBuyPriceModel(this.#totalBuyPriceModel);
    this.#lottosModel.createLottos(this.#totalBuyPriceModel.getPrice() / CONFIG.lottoPrice);
    
    LOTTO_VIEW.printBuyMessage(this.#lottosModel.getLottoList().length);
    LOTTO_VIEW.printLottoList(this.#lottosModel.getLottoList());
    
    await this.getAndCheckCorrectNumber();
    this.#lottosModel.setCorrectNumbersModel(this.#correctNumbersModel)

    await this.getAndCheckBonusNumber(this.#correctNumbersModel.getNumbers())
    this.#lottosModel.setBonusNumberModel(this.#bonusNumberModel)
    
  }

  calculateLotto() {
    this.#lottosModel.checkAllLottoNumber();
    this.#lottosModel.calculatorTotalWinCounts();
  }

  resultPrint() {
    const totalWinMoney = this.#lottosModel.getTotalWinMoney();
    LOTTO_VIEW.printResult(this.#lottosModel.getMatchNumberList());
    LOTTO_VIEW.printRateOfReturn(
      calculator.profitRate(totalWinMoney, this.#totalBuyPriceModel.getPrice())
    );
  }

  async getAndCheckTotalBuyPrice() {
    const TOTAL_BUY_PRICE = await LOTTO_VIEW.getUserInputTotalBuyPrice();

    try {
      this.#totalBuyPriceModel = new TotalBuyPriceModel(TOTAL_BUY_PRICE);
    } catch (e) {
      Console.print(`${e}`);
      return this.getAndCheckTotalBuyPrice();
    }
  }

  async getAndCheckCorrectNumber() {
    const CORRECT_NUMBER = await LOTTO_VIEW.getUserInputCorrectNumber();
    const correctNumberList = CORRECT_NUMBER.split(',').map(Number);

    try {
      this.#correctNumbersModel = new CorrectNumbersModel(correctNumberList);
    } catch (e) {
      Console.print(`${e}`);
      return this.getAndCheckCorrectNumber();
    }
  }

  async getAndCheckBonusNumber(correctNumber) {
    const BONUS_NUMBER = await LOTTO_VIEW.getUserInputBonusNumber();

    try {
      // prettier-ignore
      this.#bonusNumberModel = new BonusNumberModel(BONUS_NUMBER,this.#correctNumbersModel)
    } catch (e) {
      Console.print(`${e}`);
      return this.getAndCheckBonusNumber(correctNumber);
    }
  }
}

export default LottoController;
