import { Random } from '@woowacourse/mission-utils';
import { PRIZE, PRIZE_STATUS } from '../constants/prize.js';
import { LOTTO_ROLE } from '../constants/lotto.js';
import Validator from '../utils/validator.js';
import { InputView, OutputView } from '../view/index.js';
import Lotto from '../Lotto.js';

export default class LottoGame {
  async run() {
    const purchaseMoney = await this.#handleErrorAndRetry(() => this.#requirePurchaseMoney());
    const lottoList = this.#generateLotto(purchaseMoney);
    this.#printLottoList(lottoList);
    const winningLotteryNumbers = await this.#handleErrorAndRetry(() =>
      this.#requireLotteryNumbers(),
    );
    const bonusNumber = await this.#handleErrorAndRetry(() =>
      this.#requireBonusNumber(winningLotteryNumbers),
    );
    const lotteryResult = this.#confirmLotteryResult(lottoList, winningLotteryNumbers, bonusNumber);
    const profitRate = this.#calculateProfitRate(purchaseMoney, lotteryResult);
    this.#printPrizeResult(lotteryResult, profitRate);
  }

  async #handleErrorAndRetry(callback) {
    try {
      return await callback();
    } catch (error) {
      OutputView.printError(error.message);
      return this.#handleErrorAndRetry(callback);
    }
  }

  async #requirePurchaseMoney() {
    const amount = await InputView.readPurchaseMoney();
    Validator.validatePurchaseMoney(amount);
    return amount;
  }

  async #requireLotteryNumbers() {
    const lotteryNumbers = await InputView.readLotteryNumbers();
    Validator.validateLotteryNumbers(lotteryNumbers);
    return lotteryNumbers;
  }

  async #requireBonusNumber(winningLotteryNumbers) {
    const bonusNumber = await InputView.readBonusNumber();
    Validator.validateBonusNumber(bonusNumber, winningLotteryNumbers);
    return bonusNumber;
  }

  #generateLotto(purchaseMoney) {
    const numberOfLotto = purchaseMoney / LOTTO_ROLE.unit;
    const lottoList = [];

    for (let i = 0; i < numberOfLotto; i++) {
      const lotteryNumbers = this.#createRandomLotteryNumbers();
      const lotto = new Lotto(lotteryNumbers);
      lottoList.push(lotto);
    }
    return lottoList;
  }

  #createRandomLotteryNumbers() {
    const { minNumber, maxNumber, requiredCount } = LOTTO_ROLE;
    const numbers = Random.pickUniqueNumbersInRange(minNumber, maxNumber, requiredCount);
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers;
  }

  #printLottoList(lottoList) {
    OutputView.printLottoList(lottoList);
  }

  #printPrizeResult(lotteryResult, profitRate) {
    OutputView.printPrizeResult(lotteryResult, profitRate);
  }

  #confirmLotteryResult(lottoList, winningLotteryNumbers, bonusNumber) {
    const lotteryResult = lottoList.map((lotto) =>
      lotto.getPrize(winningLotteryNumbers, bonusNumber),
    );

    const initialResult = Object.keys(PRIZE_STATUS).map((key) => [key, 0]);
    const lotteryResultMap = new Map(initialResult);
    lotteryResult.forEach((result) => {
      lotteryResultMap.set(result, lotteryResultMap.get(result) + 1);
    });
    return lotteryResultMap;
  }

  #calculateProfitRate(purchaseMoney, lotteryResult) {
    let profit = 0;
    for (const [key, count] of lotteryResult) {
      const { prizeMoney } = PRIZE[key];
      profit += prizeMoney * count;
    }

    const profitRate = (profit / purchaseMoney) * 100;
    return profitRate.toFixed(1);
  }
}
