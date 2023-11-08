import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto';
import NUMBER from '../constants/Number';

class MyLotto {
  #lottoNumbersList = [];

  constructor(lottoCount) {
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

  #findMatchingCount(winningNumbers, numbers) {
    return numbers.filter(num => winningNumbers.getLottoNumbers().includes(num)).length;
  }

  #findMatchingBonus(bonusNumber, numbers) {
    return numbers.includes(bonusNumber);
  }

  printMyLottoNumbers() {
    this.#lottoNumbersList.forEach(lottoNumbers => lottoNumbers.printLottoNumbers());
  }

  findMatching(winningNumbers, bonusNumber) {
    const matchingResult = [];

    this.#lottoNumbersList.forEach(numbers => {
      const lottoNumbers = numbers.getLottoNumbers();
      const count = this.#findMatchingCount(winningNumbers, lottoNumbers);
      const bonus = this.#findMatchingBonus(bonusNumber, lottoNumbers);
      matchingResult.push({ count, bonus });
    });

    return matchingResult;
  }

  getPurchaseAmount() {
    return this.#lottoNumbersList.length * NUMBER.PURCHASE_AMOUNT_UNIT;
  }
}

export default MyLotto;
