import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import NUMBER from '../constants/Number';

class MyLotto {
  #purchaseAmount;

  #lottoNumbersList = [];

  constructor(purchaseLottoAmount, lottoCount) {
    this.#purchaseAmount = purchaseLottoAmount;
    this.#createLottoNumbersList(lottoCount);
  }

  #createLottoNumbersList(lottoCount) {
    Array.from({ length: lottoCount }).forEach(() => {
      const numbers = this.#pickRandomNumbers();
      this.#lottoNumbersList.push(new Lotto(numbers));
    });
  }

  #pickRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      NUMBER.MIN_IN_RANGE,
      NUMBER.MAX_IN_RANGE,
      NUMBER.LOTTO_NUMBER_OF_NUMBERS,
    );

    return randomNumbers;
  }

  showMyLottoNumbers() {
    this.#lottoNumbersList.forEach(lottoNumbers => lottoNumbers.printLottoNumbers());
  }

  findMatching(winningNumbers, bonusNumber) {
    const matchingResult = [];

    this.#lottoNumbersList.forEach(numbers => {
      const count = numbers
        .getLottoNumbers()
        .filter(num => winningNumbers.getLottoNumbers().includes(num)).length;
      const bonus = numbers.getLottoNumbers().includes(bonusNumber);
      matchingResult.push({ count, bonus });
    });

    return matchingResult;
  }

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default MyLotto;
