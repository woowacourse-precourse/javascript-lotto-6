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

class App {
  constructor() {
    this.lottos = [];
    this.purchaseAmount = 0;
  }

  async play() {
    this.startLotto();
  }

  async startLotto() {
    const inputPurchaseAmount = await purchaseAmountInput();
    this.purchaseAmount = inputPurchaseAmount;
    this.purchaseQuantity(inputPurchaseAmount);
  }

  async purchaseQuantity(inputPurchaseAmount) {
    this.validateInput(inputPurchaseAmount);
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
    print(MESSAGE.PURCHASE_QUANTITY(lottoQuantity));
    lottos.forEach((lotto) => lotto.printLottos());
    this.winningNumber(lottos);
  }

  async winningNumber(lottos) {
    const inputWinningNumber = await winningNumberInput();
    this.createWinningNumber(lottos, inputWinningNumber);
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
    const inputBonusNumber = Number(await bonusNumberInput());
    this.createBonusNumber(inputBonusNumber, winningNumber);
    this.lottoMatch(lottos, winningNumber, inputBonusNumber);
  }

  async createBonusNumber(inputBonusNumber, winningNumber) {
    validateBonusNumberInput(inputBonusNumber, winningNumber);
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
    // 3,4,5,5(보너스), 수익률 총 6개

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
    this.printLootoResult(lottoResultArray, lottoSumReturn);
  }

  async printLootoResult(lottoResultArray, lottoSumReturn) {
    print(MESSAGE.WINNING_STATISTICS);
    print(MESSAGE.UNDERLINE);
    print(
      `${MESSAGE.FIFTH_PLACE}${lottoResultArray[LOTTO.FIFTH_PLACE]}${
        MESSAGE.EA
      }`
    );
    print(
      `${MESSAGE.FOURTH_PLACE}${lottoResultArray[LOTTO.FOURTH_PLACE]}${
        MESSAGE.EA
      }`
    );
    print(
      `${MESSAGE.THIRD_PLACE}${lottoResultArray[LOTTO.THIRD_PLACE]}${
        MESSAGE.EA
      }`
    );
    print(
      `${MESSAGE.SECOND_PLACE}${lottoResultArray[LOTTO.SECOND_PLACE]}${
        MESSAGE.EA
      }`
    );
    print(
      `${MESSAGE.FIRST_PLACE}${lottoResultArray[LOTTO.FIRST_PLACE]}${
        MESSAGE.EA
      }`
    );
    print(MESSAGE.TOTAL_RETURN(lottoSumReturn));
  }
}

export default App;
