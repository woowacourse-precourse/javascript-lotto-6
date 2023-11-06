import InputView from "../../View/InputView.js";
import PurchaseCost from "../PurchaseCost.js";
import Lotto from "../Lotto.js";
import BonusLotto from "../BonusLotto.js";
import OutputView from "../../View/OutputView.js";
import { NUMBER } from "../../utils/Constant.js";

class LottoController {
  #userLottoCost;
  #userPickLottoNumbers;
  #userPickBonusLottoNumber;
  #lottoMatchResult;
  #incomeResult;
  constructor() {}

  async play() {
    await this.getPurchaseCost();
    await this.getUserPickLottoNumbers();
    await this.getUserPickBonusLottoNumber();
    await this.getLottoMatchResultData();
    await this.getIncomeResult();
    await this.printLottoNumbersMatchCount();
  }
  
  async getPurchaseCost() {
    this.#userLottoCost = new PurchaseCost(await InputView.inputPurchaseCost());
    await this.printPurChaseResult();
  }
  
  async printPurChaseResult() {
    await OutputView.outputPurchaseLottoCount(parseInt(await this.#userLottoCost.getPurchaseCost() / 1000));
    await OutputView.outputRandomLottoNumbersList(await this.#userLottoCost.getRandomLottoNumbersList());
  }

  async getUserPickLottoNumbers() {
    this.#userPickLottoNumbers = new Lotto(await InputView.inputLotto());
  }

  async getUserPickBonusLottoNumber() {
    this.#userPickBonusLottoNumber = new BonusLotto(await InputView.inputBonusLotto(), this.#userPickLottoNumbers.getLottoNumbers());
  }

  async printLottoNumbersMatchCount() {
    await OutputView.outputLottoMatchResult(this.#lottoMatchResult, this.#incomeResult);
  }

  async getLottoMatchResultData() {
    this.#lottoMatchResult = {};
    this.#incomeResult = 0;
    (await this.getLottoMatchResult()).forEach(matchData => {
      const [numberMatchCount, bonusCount] = matchData;
      if (this.#lottoMatchResult[numberMatchCount] === undefined) {
        this.#lottoMatchResult[numberMatchCount] = [0, 0];
      };
      this.#lottoMatchResult[numberMatchCount][0] += 1
      if (bonusCount) this.#lottoMatchResult[numberMatchCount][1] += 1;
      this.checkIncomeResult(numberMatchCount, bonusCount);
    });
  }
  
  async getLottoMatchResult() {
    const matchCount = await this.#userPickLottoNumbers.getLottoMathCount(await this.#userLottoCost.getRandomLottoNumbersList());
    const mathBonusCount = await this.#userPickBonusLottoNumber.getLottoMatchBonusCount(await this.#userLottoCost.getRandomLottoNumbersList());
    return matchCount.map((numberMatchCount, index) => [numberMatchCount, mathBonusCount[index]]);
  }

  async checkIncomeResult(numberMatchCount, bonusCount) {
    let price = NUMBER.MATCH_NUMBER_PRICE[numberMatchCount]
    if (NUMBER.CHECK_MATCH_BONUS_NUMBER[numberMatchCount] && (bonusCount)) {
      price = NUMBER.MATCH_BONUS_NUMBER_PRICE[numberMatchCount];
    };
    if (price !== undefined) this.#incomeResult += price;
  }

  async getIncomeResult() {
    this.#incomeResult = this.#incomeResult / await this.#userLottoCost.getPurchaseCost() * 100 - 100;
    if (this.#incomeResult < 0) this.#incomeResult += 100;
  }

}

export default LottoController;