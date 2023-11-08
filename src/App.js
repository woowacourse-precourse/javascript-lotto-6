import Lotto from "./Lotto.js";
import { LOTTO, MESSAGE } from "./common/constants.js";
import { lottoRandomNumber, lottoSort, print } from "./common/utils.js";
import {
  validateBonusNumberInput,
  validatePurchaseInput,
  validateWinningInput,
  validateWinningNumber,
} from "./common/validation.js";
import {
  bonusNumberInput,
  purchaseAmountInput,
  winningNumberInput,
} from "./view/inputView.js";
import {
  printErrorMessage,
  printLottoResult,
  printQuantity,
} from "./view/outputView.js";

class App {
  constructor() {
    this.lottos = [];
    this.purchaseAmount = 0;
  }

  async play() {
    this.startLotto();
  }

  async startLotto() {
    try {
      const inputPurchaseAmount = await purchaseAmountInput();
      this.purchaseAmount = inputPurchaseAmount;
      this.validateInput(inputPurchaseAmount);
      return this.purchaseQuantity(inputPurchaseAmount);
    } catch (e) {
      printErrorMessage(e);
      await this.startLotto();
    }
  }

  async purchaseQuantity(inputPurchaseAmount) {
    const lottoQuantity = inputPurchaseAmount / LOTTO.PRICE;
    this.createLotto(lottoQuantity);
  }

  async validateInput(inputPurchaseAmount) {
    validatePurchaseInput(inputPurchaseAmount);
  }

  async createLotto(lottoQuantity) {
    let lottos = this.lottos;
    while (lottos.length < lottoQuantity) {
      const lottoNumber = lottoRandomNumber(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH);
      lottos.push(new Lotto(lottoNumber));
    }
    printQuantity(lottoQuantity);
    lottos.forEach((lotto) => lotto.printLottos());
    this.winningNumber(lottos);
  }

  async winningNumber(lottos) {
    try {
      const inputWinningNumber = await winningNumberInput();
      return this.createWinningNumber(lottos, inputWinningNumber);
    } catch (e) {
      printErrorMessage(e);
      await this.winningNumber(lottos);
    }
  }

  async createWinningNumber(lottos, inputWinningNumber) {
    validateWinningInput(inputWinningNumber);
    const winningNumber = inputWinningNumber
      .split(",")
      .map((number) => Number(number));
    validateWinningNumber(winningNumber);
    this.bonusNumber(lottos, winningNumber);
  }

  async bonusNumber(lottos, winningNumber) {
    try {
      const inputBonusNumber = Number(await bonusNumberInput());
      return this.createBonusNumber(lottos, inputBonusNumber, winningNumber);
    } catch (e) {
      printErrorMessage(e);
      await this.bonusNumber(lottos, winningNumber);
    }
  }

  async createBonusNumber(lottos, inputBonusNumber, winningNumber) {
    validateBonusNumberInput(inputBonusNumber, winningNumber);
    this.lottoMatch(lottos, winningNumber, inputBonusNumber);
  }

  async lottoMatch(lottos, winningNumber, inputBonusNumber) {
    let matchLottoCount = [];
    let matchLottoBonus = [];
    lottos.forEach((lotto) => {
      matchLottoCount.push(lotto.matchLotto(winningNumber));
      matchLottoBonus.push(lotto.matchLottoBonus(inputBonusNumber));
    });
    this.lottoResult(matchLottoCount, matchLottoBonus);
  }

  async lottoResult(matchLottoCount, matchLottoBonus) {
    const lottoResultArray = Array(6).fill(0);
    for (let i = 0; i < matchLottoCount.length; i++) {
      if (matchLottoCount[i] === LOTTO.SIX) {
        lottoResultArray[LOTTO.FIRST_PLACE] += 1;
      } else if (
        matchLottoCount[i] === LOTTO.FIVE &&
        matchLottoBonus[i] === true
      ) {
        lottoResultArray[LOTTO.SECOND_PLACE] += 1;
      } else if (
        matchLottoCount[i] === LOTTO.FIVE &&
        matchLottoBonus[i] === false
      ) {
        lottoResultArray[LOTTO.THIRD_PLACE] += 1;
      } else if (matchLottoCount[i] === LOTTO.FOUR) {
        lottoResultArray[LOTTO.FOURTH_PLACE] += 1;
      } else if (matchLottoCount[i] === LOTTO.THREE) {
        lottoResultArray[LOTTO.FIFTH_PLACE] += 1;
      }
    }
    this.totalLottoSum(lottoResultArray);
  }

  async totalLottoSum(lottoResultArray) {
    let lottoSum = 0;
    lottoSum += lottoResultArray[LOTTO.FIRST_PLACE] * LOTTO.FIRST_PLACE_PRIZE;
    lottoSum += lottoResultArray[LOTTO.SECOND_PLACE] * LOTTO.SECOND_PLACE_PRIZE;
    lottoSum += lottoResultArray[LOTTO.THIRD_PLACE] * LOTTO.THIRD_PLACE_PRIZE;
    lottoSum += lottoResultArray[LOTTO.FOURTH_PLACE] * LOTTO.FOURTH_PLACE_PRIZE;
    lottoSum += lottoResultArray[LOTTO.FIFTH_PLACE] * LOTTO.FIFTH_PLACE_PRIZE;
    this.totalLottoSumRetrun(lottoResultArray, lottoSum);
  }

  async totalLottoSumRetrun(lottoResultArray, lottoSum) {
    const lottoSumReturn = ((lottoSum / this.purchaseAmount) * 100).toFixed(1);
    printLottoResult(lottoResultArray, lottoSumReturn);
  }
}

export default App;
