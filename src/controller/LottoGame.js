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
  }

  async #requirePurchaseAmount() {
    const amount = await InputView.readPurchaseAmount();
    Validator.validatePurchaseAmount(amount);
    return amount;
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
}
