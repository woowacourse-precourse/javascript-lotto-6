import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { MIN_NUMBER, MAX_NUMBER, COUNT_NUMBER, PURCHASE_AMOUNT_MESSAGE,WINNING_NUMBERS_MESSAGE, BONUS_NUMBER_MESSAGE, ERRORS } from './constants.js';

class LottoGame {
  #inputNumbers = [];
  #bonus = null;
  #lottoPieces = 0;
  #lottoNumbers = [];

  get lottoPieces() {
    return this.#lottoPieces;
  }

  get lottoNumbers() {
    return this.#lottoNumbers;
  }

  async inputLottoNumber() {
    try {
      const lottoNum = await Console.readLineAsync(WINNING_NUMBERS_MESSAGE);

      this.#inputNumbers = lottoNum.split(',');
      const lotto = new Lotto(this.#inputNumbers);

      return this.#inputNumbers;
    } catch (e) {
      Console.print(e.message);
      return this.inputLottoNumber();
    }
  }

  async inputBonusNumber() {
    try {
      this.#bonus = await Console.readLineAsync(BONUS_NUMBER_MESSAGE);
      this.validateBonusNumber(this.#bonus);
      return this.#bonus;
    } catch (e) {
      Console.print(e.message);
      return this.inputBonusNumber();
    }
  }

  validateBonusNumber(number) {
    if (number.trim() === '')
      throw new Error(ERRORS.invalidBlank);
    if (!Number.isInteger(+number) || Number.isNaN(+number))
      throw new Error(ERRORS.invalidNaN);
    if (+number < MIN_NUMBER || +number > MAX_NUMBER)
      throw new Error(ERRORS.invalidRange);
    if (this.#inputNumbers.includes(number))
      throw new Error(ERRORS.invalidDuplicateLottoNumbers);
  }

  #validatePurchaseAmount(amount) {
    if (amount < 1000 || amount % 1000 !== 0)
      throw new Error(ERRORS.invalidAmount);
  }

  async buyLotto() {
    try {
      const inputAmount = await Console.readLineAsync(PURCHASE_AMOUNT_MESSAGE);
      if (inputAmount.trim() === '')
        throw new Error(ERRORS.invalidBlank);
      if (!Number.isInteger(+inputAmount) || Number.isNaN(+inputAmount))
        throw new Error(ERRORS.invalidNaN);

      this.#validatePurchaseAmount(+inputAmount);
      this.#lottoPieces = inputAmount / 1000;
      return this.#lottoPieces;
    } catch (e) {
      Console.print(e.message);
      return this.buyLotto();
    }
  }

  makeRandomNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, COUNT_NUMBER).sort((a, b) => a - b);
    this.#lottoNumbers.push(lottoNumber);
    return `[${lottoNumber.join(', ')}]`;
  }
}

export default LottoGame;