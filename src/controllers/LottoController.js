import { Console } from '@woowacourse/mission-utils';
import CONFIG from '../constants/config.js';
import calculator from '../utils/calculator.js';
import LOTTO_VIEW from '../views/lottoView.js';
import LottoModel from '../models/LottoModel.js';
import throwError from '../utils/throwError.js';
import ERROR_MESSAGES from '../constants/errorMessage.js';
import { checkNumberType } from '../utils/numberUtils.js';
import { checkListSameValue, checkListValues } from '../utils/listUtils.js';

class LottoController {
  #lottoModel = new LottoModel();

  async start() {
    await this.processUserInputs();

    this.calculateLotto();
    this.resultPrint();
  }

  // prettier-ignore
  async processUserInputs() {
    this.#lottoModel.setTotalBuyPrice(await this.getAndCheckTotalBuyPrice());
    this.#lottoModel.createLottos(this.#lottoModel.getTotalBuyPrice() / CONFIG.lottoPrice);
    
    LOTTO_VIEW.printBuyMessage(this.#lottoModel.getLottoList().length);
    LOTTO_VIEW.printLottoList(this.#lottoModel.getLottoList());

    this.#lottoModel.setCorrectNumber(await this.getAndCheckCorrectNumber());

    const bonusNumber = await this.getAndCheckBonusNumber(this.#lottoModel.getCorrectNumber());
    this.#lottoModel.setBonusNumber(bonusNumber);
  }

  calculateLotto() {
    this.#lottoModel.checkAllLottoNumber();
    this.#lottoModel.calculatorTotalWinCounts();
  }

  resultPrint() {
    const totalWinMoney = this.#lottoModel.getTotalWinMoney();
    LOTTO_VIEW.printResult(this.#lottoModel.getMatchNumberList());
    LOTTO_VIEW.printRateOfReturn(
      calculator.profitRate(totalWinMoney, this.#lottoModel.getTotalBuyPrice())
    );
  }

  async getAndCheckTotalBuyPrice() {
    const TOTAL_BUY_PRICE = await LOTTO_VIEW.getUserInputTotalBuyPrice();

    try {
      this.checkUserInputTotalBuyPrice(TOTAL_BUY_PRICE);
      return TOTAL_BUY_PRICE;
    } catch (e) {
      Console.print(`${e}`);
      return this.getAndCheckTotalBuyPrice();
    }
  }

  // prettier-ignore
  checkUserInputTotalBuyPrice(totalBuyPrice) {
    totalBuyPrice % CONFIG.lottoPrice && throwError(ERROR_MESSAGES.buyLottoPriceError);
    !checkNumberType(totalBuyPrice) && throwError(ERROR_MESSAGES.numberTypeError)
  }

  async getAndCheckCorrectNumber() {
    const CORRECT_NUMBER = await LOTTO_VIEW.getUserInputCorrectNumber();
    const correctNumberList = CORRECT_NUMBER.split(',').map(Number);

    try {
      this.checkUserInputCorrectLottoNumber(correctNumberList);
      return correctNumberList;
    } catch (e) {
      Console.print(`${e}`);
      return this.getAndCheckCorrectNumber();
    }
  }

  // prettier-ignore
  checkUserInputCorrectLottoNumber(correctLottoNumber) {
    correctLottoNumber.forEach((lottoNumber) => !checkNumberType(lottoNumber) && throwError(ERROR_MESSAGES.numberTypeError));

    checkListValues(correctLottoNumber,CONFIG.minLottoNumber,CONFIG.maxLottoNumber) && throwError(ERROR_MESSAGES.numberOutOfRange);

    correctLottoNumber.length !== CONFIG.lottoLength && throwError(ERROR_MESSAGES.numberOverLength);

    checkListSameValue(correctLottoNumber) && throwError(ERROR_MESSAGES.isSameLottoNumber);
  }

  async getAndCheckBonusNumber(correctNumber) {
    const BONUS_NUMBER = await LOTTO_VIEW.getUserInputBonusNumber();

    try {
      this.checkUserInputBonusNumber(correctNumber, BONUS_NUMBER);
      return BONUS_NUMBER;
    } catch (e) {
      Console.print(`${e}`);
      return this.getAndCheckBonusNumber(correctNumber);
    }
  }

  // prettier-ignore
  checkUserInputBonusNumber(correctLottoNumber, bonusNumber) {
    !checkNumberType(bonusNumber) && throwError(ERROR_MESSAGES.numberTypeError);

    checkListValues([bonusNumber],CONFIG.minLottoNumber,CONFIG.maxLottoNumber) && throwError(ERROR_MESSAGES.numberOutOfRange);
    
    checkListSameValue([...correctLottoNumber,+bonusNumber]) && throwError(ERROR_MESSAGES.isSameLottoNumber)

  }
}

export default LottoController;
