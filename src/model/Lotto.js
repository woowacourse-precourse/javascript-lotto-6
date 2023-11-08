import Messages from '../utils/Messages.js';
import Constants from '../utils/Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    const messages = new Messages();
    const constants = new Constants();
    if (numbers.some((number) => isNaN(number) || typeof number !== 'number')) {
      throw new Error(messages.getErrorMsg('notNumber'));
    }
    if (numbers.length !== constants.getLottoNumberCount()) {
      throw new Error(messages.getErrorMsg('notLength'));
    }
    if (numbers.some((num) => this.#checkArange(num))) {
      throw new Error(messages.getErrorMsg('outOfindex'));
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(messages.getErrorMsg('overlap'));
    }

    // 보너스 번호와 당첨 번호가 중복되는 경우는 controller에서 처리
  }

  #checkArange(number) {
    const constants = new Constants();
    if (
      number < constants.getLottoNumberMin() ||
      number > constants.getLottoNumberMax()
    ) {
      return true;
    }
    return false;
  }

  async compare(lotto) {
    const lottoNumbers = await lotto.getNumbers();
    const matchCount = this.#numbers.filter((number) =>
      lottoNumbers.includes(number)
    ).length;
    return matchCount;
  }

  async isBonusInclude(bonusNum) {
    return this.#numbers.includes(bonusNum);
  }
}

export default Lotto;
