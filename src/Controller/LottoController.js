import InputView from "../../View/InputView.js";
import PurchaseCost from "../PurchaseCost.js";
import Lotto from "../Lotto.js";
import BonusLotto from "../BonusLotto.js";
import OutputView from "../../View/OutputView.js";
import { NUMBER } from "../../utils/Constant.js";

class LottoController {
  #lottoCost;
  #pickLotto;
  #bonusLotto;
  #matchResult;
  #incomeResult;
  constructor() {
    this.#initialize();
  }
  
  async #initialize() {
    await this.#getDefaultInput();
    this.printLottoNumbersMatchCount();
  }

  async printLottoNumbersMatchCount() {
    await this.getLottoMatchResultyData();
    await this.getIncomeResult();
    OutputView.outputLottoMatchResult(this.#matchResult, this.#incomeResult);
  }

  async getIncomeResult() {
    this.#incomeResult = this.#incomeResult / await this.#lottoCost.getPurchaseCost() * 100 - 100;
    if (this.#incomeResult < 0) this.#incomeResult += 100;
  }

  async #getDefaultInput() {
    await this.getPurchaseCost();
    this.#pickLotto = new Lotto(await InputView.inputLotto());
    this.#bonusLotto = new BonusLotto(await InputView.inputBonusLotto(), this.#pickLotto.getLottoNumbers());
  }

  async getPurchaseCost() {
    this.#lottoCost = new PurchaseCost(await InputView.inputPurchaseCost());
    OutputView.outputRandomLottoNumbersList(await this.#lottoCost.getRandomLottoNumbersList());
  }

  async getLottoMatchResult() {
    const matchCount = await this.#pickLotto.getLottoMathCount(await this.#lottoCost.getRandomLottoNumbersList());
    const mathBonusCount = await this.#bonusLotto.getLottoMatchBonusCount(await this.#lottoCost.getRandomLottoNumbersList());
    return matchCount.map((numberMatchCount, index) => [numberMatchCount, mathBonusCount[index]]);
  }
  
  async getLottoMatchResultyData() {
    this.#matchResult = {};
    this.#incomeResult = 0;
    (await this.getLottoMatchResult()).forEach(matchData => {
      const [numberMatchCount, bonusCount] = matchData;
      if (this.#matchResult[numberMatchCount] === undefined) {
        this.#matchResult[numberMatchCount] = [0, 0];
      };
      this.#matchResult[numberMatchCount][0] += 1
      if (bonusCount) this.#matchResult[numberMatchCount][1] += 1;
      this.checkIncomeResult(numberMatchCount, bonusCount);
    });
  }

  async checkIncomeResult(numberMatchCount, bonusCount) {
    let price = NUMBER.MATCH_NUMBER_PRICE[numberMatchCount]
    if (NUMBER.CHECK_MATCH_BONUS_NUMBER[numberMatchCount] && (bonusCount)) {
      price = NUMBER.MATCH_BONUS_NUMBER_PRICE[numberMatchCount];
    };
    if (price !== undefined) this.#incomeResult += price;
  }
}

export default LottoController;