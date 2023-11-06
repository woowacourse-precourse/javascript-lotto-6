import { Console, Random } from '@woowacourse/mission-utils';
import { ErrorMessage } from './ErrorMessage.js';
const LOTTO_PRICE = 1000;
const LOTTO_NUMBER_COUNT = 6;
const DECICMAL_NUMBER = 10;
const LOTTO_NUMBER_START = 1;
const LOTTO_NUMBER_LAST = 45;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  #convertPrivateNumbersToNumber() {
    return parseInt(this.#numbers, DECICMAL_NUMBER);
  }

  #lottoCount() {
    return this.#convertPrivateNumbersToNumber() / LOTTO_PRICE;
  }

  validateLottoAmount() {
    const isValidateLottoAmount = Number.isInteger(this.#lottoCount());
    if (!isValidateLottoAmount) {
      throw new Error(ErrorMessage.invalidLottoAmount());
    }
  }

  validateLottoWinningNumbers() {
    if (this.#numbers.split(',').length !== LOTTO_NUMBER_COUNT) {
      throw new Error(ErrorMessage.invalidLottoNumberSeparator);
    }
    const winningNumbersArray = this.#parseWinningNumbers();
    this.#validateWinningNumberCount(winningNumbersArray);
    this.#validateWinningNumberRange(winningNumbersArray);
    this.#validateDuplicateWinningNumbers(winningNumbersArray);
  }

  #parseWinningNumbers() {
    return this.#numbers
      .split(',')
      .map((value) => parseInt(value))
      .sort((a, b) => a - b);
  }

  #validateWinningNumberCount(winningNumbersArray) {
    if (winningNumbersArray.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(ErrorMessage.invalidLottoWinningNumberCount());
    }
  }

  #validateWinningNumberRange(winningNumbersArray) {
    if (
      winningNumbersArray[0] < LOTTO_NUMBER_START ||
      winningNumbersArray.at(-1) > LOTTO_NUMBER_LAST
    ) {
      throw new Error(ErrorMessage.invalidLottoWinningNumberRange());
    }
  }

  #validateDuplicateWinningNumbers(winningNumbersArray) {
    if (winningNumbersArray.length !== new Set(winningNumbersArray).size) {
      throw new Error(ErrorMessage.invalidDuplicateWinningNumbers());
    }
  }

  getLottoWinningNumberArray() {
    return this.#numbers
      .split(',')
      .map((number) => parseInt(number, DECICMAL_NUMBER));
  }

  validateLottoBonusNumber(lottoWinningNumberArray) {
    const bonusNumber = this.#convertPrivateNumbersToNumber();
    if (lottoWinningNumberArray.includes(bonusNumber)) {
      throw new Error(ErrorMessage.invalidDuplicateBonusNumber());
    }
  }

  generateLottoTicket() {
    const lottoTicket = Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_START,
      LOTTO_NUMBER_LAST,
      LOTTO_NUMBER_COUNT
    );
    return lottoTicket.sort((a, b) => a - b);
  }

  generateLottoTicketsArray() {
    const ticketCount = this.#lottoCount();
    const lottoTicketsArray = [];
    while (lottoTicketsArray.length < ticketCount) {
      const ticket = this.generateLottoTicket();
      lottoTicketsArray.push(ticket);
    }
    return lottoTicketsArray;
  }
}

export default Lotto;
