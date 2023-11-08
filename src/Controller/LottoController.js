import View from '../View/View.js';
import Lotto from '../Model/Lotto.js';
import { Random } from '@woowacourse/mission-utils';
import Constant from '../Constants/Constant.js';

class LottoController {
  #view;

  constructor() {
    this.#view = View;
  }

  async play() {
    const purchaseAmount = await this.#view.getPurchaseAmount();
    const countOfLotto = this.#getCountOfLotto(purchaseAmount);
    this.#view.printCountOfLotto(countOfLotto);
    const lottoArray = this.#getLottoNumber(countOfLotto);
    this.#view.printLottoNumbers(lottoArray);
    const goalLotto = await this.#getGoalLotto();
    const bonusNumber = await this.#view.getBonusNumber(goalLotto.getNumbers());
    const correctArray = goalLotto.calculateCorrectNumber(lottoArray, bonusNumber);
    const resultArray = this.#calculateResult(correctArray);
    const rateOfReturn = this.#calculateRateOfReturn(resultArray, purchaseAmount);
    this.#view.printResult(resultArray, rateOfReturn * 100);
  }

  #getCountOfLotto(purchaseAmount) {
    return purchaseAmount / Constant.UNIT_OF_AMOUNT;
  }

  #getLottoNumber(countOfLotto) {
    const lottoArray = [];
    for (let i = 0; i < countOfLotto; i++) {
      const lotto = this.#getRandomNumber();
      lottoArray.push(lotto);
    }
    return lottoArray;
  }

  async #getGoalLotto() {
    try {
      const lotto = new Lotto(await this.#view.getGoalNumber());
      return lotto;
    } catch (error) {
      this.#view.printMessage(error);
      const newLotto = await this.#getGoalLotto();
      return newLotto;
    }
  }

  #getRandomNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(
      Constant.MIN_RANDOM_NUMBER,
      Constant.MAX_RANDOM_NUMBER,
      Constant.COUNT
    );
    const lotto = new Lotto(lottoNumber);
    return lotto;
  }

  #calculateResult(correctArray) {
    const result = [0, 0, 0, 0, 0];
    correctArray.forEach(([correctCount, correctBonus]) => {
      if (correctCount === 3) result[0] += 1;
      else if (correctCount === 4) result[1] += 1;
      else if (correctCount === 5 && !correctBonus) result[2] += 1;
      else if (correctCount === 5 && correctBonus) result[3] += 1;
      else if (correctCount === 6) result[4] += 1;
    });
    return result;
  }

  #calculateRateOfReturn(resultArray, purchaseAmount) {
    return (
      (resultArray[0] * Constant[5] +
        resultArray[1] * Constant[4] +
        resultArray[2] * Constant[3] +
        resultArray[3] * Constant[2] +
        resultArray[4] * Constant[1]) /
      purchaseAmount
    );
  }
}

export default LottoController;
