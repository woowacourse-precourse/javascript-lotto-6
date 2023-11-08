import { Random } from '@woowacourse/mission-utils';
import { PRIZE, PRIZE_STATUS } from '../constants/prize.js';
import { LOTTO_ROLE } from '../constants/lotto.js';
import Validator from '../utils/validator.js';
import { InputView, OutputView } from '../view/index.js';
import Lotto from '../model/Lotto.js';

export default class LottoGame {
  async run() {
    const purchaseAmount = await this.#handleErrorAndRetry(() => this.#requirePurchaseAmount());
    const lottoList = this.#generateLotto(purchaseAmount);
    this.#printLottoList(lottoList);
    const winningLotteryNumbers = await this.#handleErrorAndRetry(() =>
      this.#requireLotteryNumbers(),
    );
    const bonusNumber = await this.#handleErrorAndRetry(() =>
      this.#requireBonusNumber(winningLotteryNumbers),
    );
    const lotteryResult = this.#confirmLotteryResult(lottoList, winningLotteryNumbers, bonusNumber);
    const earningsRate = this.#calculateEarningsRate(purchaseAmount, lotteryResult);
    this.#printPrizeResult(lotteryResult, earningsRate);
  }

  async #handleErrorAndRetry(callback) {
    try {
      return await callback();
    } catch (error) {
      OutputView.printError(error.message);
      return this.#handleErrorAndRetry(callback);
    }
  }

  async #requirePurchaseAmount() {
    const amount = await InputView.readPurchaseAmount();
    Validator.validatePurchaseAmount(amount);
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

  #generateLotto(purchaseAmount) {
    const numberOfLotto = purchaseAmount / LOTTO_ROLE.unit;
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

  #printPrizeResult(lotteryResult, earningsRate) {
    OutputView.printPrizeResult(lotteryResult, earningsRate);
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

  #calculateEarningsRate(purchaseAmount, lotteryResult) {
    let profit = 0;
    for (const [key, count] of lotteryResult) {
      const { prizeMoney } = PRIZE[key];
      profit += prizeMoney * count;
    }

    const EarningsRate = (profit / purchaseAmount) * 100;
    return EarningsRate.toFixed(1);
  }
}
