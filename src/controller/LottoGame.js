import { Random } from '@woowacourse/mission-utils';
import { LOTTO_ROLE } from '../constants/lotto.js';
import Validator from '../utils/validator.js';
import { InputView, OutputView } from '../view/index.js';
import Lotto from '../model/Lotto.js';

export default class LottoGame {
  async run() {
    const purchaseAmount = await this.#requirePurchaseAmount();
    const lottoList = this.#generateLotto(purchaseAmount);
    this.#printLottoList(lottoList);
    const winningLotteryNumbers = await this.#requireLotteryNumbers();
    const bonusNumber = await this.#requireBonusNumber(winningLotteryNumbers);
    const lotteryResult = this.#confirmLotteryResult(lottoList, winningLotteryNumbers, bonusNumber);
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

  #confirmLotteryResult(lottoList, winningLotteryNumbers, bonusNumber) {
    const lotteryResult = lottoList.map((lotto) =>
      lotto.getPrize(winningLotteryNumbers, bonusNumber),
    );

    const lotteryResultMap = new Map();
    lotteryResult.forEach((result) => {
      lotteryResultMap.set(result, (lotteryResultMap.get(result) || 0) + 1);
    });
    return lotteryResultMap;
  }
}
