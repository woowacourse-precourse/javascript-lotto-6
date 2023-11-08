import InputView from "../../View/InputView.js";
import OutputView from "../../View/OutputView.js";
import { NUMBER } from "../../utils/Constant.js";
import PurchaseCost from "../PurchaseCost.js";
import Lotto from "../Lotto.js";
import BonusLotto from "../BonusLotto.js";

class LottoController {
  #userLottoCost;
  #userPickLottoNumbers;
  #userPickBonusLottoNumber;
  #lottoMatchResult;
  #incomeResult;
  constructor() {
    this.#userLottoCost = 0;
    this.#userPickLottoNumbers = [0];
    this.#userPickBonusLottoNumber = 0;
    this.#lottoMatchResult = {};
    this.#incomeResult = 0;
  }

  async play() {
    await this.getPurchaseCost();
    await this.getUserPickLottoNumbers();
    await this.getUserPickBonusLottoNumber();
    await this.getLottoMatchResultData();
    await this.getIncomeResult();
    await this.printLottoNumbersMatchCount();
  }

  async getPurchaseCost() {
    while (true) {
      try {
        this.#userLottoCost = new PurchaseCost(
          await InputView.inputPurchaseCost()
        );
        await this.printPurChaseResult();
        break;
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  async printPurChaseResult() {
    await OutputView.outputPurchaseLottoCount(
      parseInt((await this.#userLottoCost.getPurchaseCost()) / NUMBER.UNIT)
    );
    await OutputView.outputRandomLottoNumbersList(
      await this.#userLottoCost.getRandomLottoNumbersList()
    );
  }

  async getUserPickLottoNumbers() {
    while (true) {
      try {
        this.#userPickLottoNumbers = new Lotto(
          (await InputView.inputLotto()).split(",")
        );
        break;
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  async getUserPickBonusLottoNumber() {
    while (true) {
      try {
        this.#userPickBonusLottoNumber = new BonusLotto(
          await InputView.inputBonusLotto(),
          this.#userPickLottoNumbers.getLottoNumbers()
        );
        break;
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  async printLottoNumbersMatchCount() {
    await OutputView.outputLottoMatchResult(
      this.#lottoMatchResult,
      this.#incomeResult
    );
  }

  async getLottoMatchResultData() {
    (await this.getLottoMatchResult()).forEach((matchData) => {
      const [numberMatchCount, bonusCount] = matchData;
      if (this.#lottoMatchResult[numberMatchCount] === undefined) {
        this.#lottoMatchResult[numberMatchCount] = [0, 0];
      }
      this.#lottoMatchResult[numberMatchCount][0] += 1;
      if (bonusCount) this.#lottoMatchResult[numberMatchCount][1] += 1;
      this.checkIncomeResult(numberMatchCount, bonusCount);
    });
  }

  async getLottoMatchResult() {
    const matchCount = await this.#userPickLottoNumbers.getLottoMathCount(
      await this.#userLottoCost.getRandomLottoNumbersList()
    );
    const matchBonusCount =
      await this.#userPickBonusLottoNumber.getLottoMatchBonusCount(
        await this.#userLottoCost.getRandomLottoNumbersList()
      );
    return matchCount.map((numberMatchCount, index) => [
      numberMatchCount,
      matchBonusCount[index],
    ]);
  }

  async checkIncomeResult(numberMatchCount, bonusCount) {
    let price = NUMBER.MATCH_NUMBER_PRICE[numberMatchCount];
    if (NUMBER.CHECK_MATCH_BONUS_NUMBER[numberMatchCount] && bonusCount) {
      price = NUMBER.MATCH_BONUS_NUMBER_PRICE[numberMatchCount];
    }
    if (price !== undefined) this.#incomeResult += price;
  }

  async getIncomeResult() {
    this.#incomeResult =
      (this.#incomeResult / (await this.#userLottoCost.getPurchaseCost())) *
        100 -
      100;
    this.#incomeResult =
      Math.round(this.#incomeResult * 10 ** NUMBER.INCOME_DECIMAL_POINT_AREA) /
      10 ** NUMBER.INCOME_DECIMAL_POINT_AREA;
    if (this.#incomeResult < 0) this.#incomeResult += 100;
  }
}

export default LottoController;
