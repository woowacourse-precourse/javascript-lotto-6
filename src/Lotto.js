import { Console } from '@woowacourse/mission-utils';
import LottoError from './LottoError.js';
import { REWARD_INFOS } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    numbers.sort((a, b) => a - b);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new LottoError('로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size != numbers.length) {
      throw new LottoError('로또 번호는 중복되지 않아야 합니다.');
    }
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  findReward(winningNumbers, bonusNumber) {
    const matchedNumbersCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;
    const hasBonusNumber = this.#numbers.includes(bonusNumber);

    const rewardInfo = REWARD_INFOS.find(
      (reward) =>
        reward.MATCH_COUNT === matchedNumbersCount &&
        reward.BONUS === hasBonusNumber
    );

    if (rewardInfo) return rewardInfo;
    return null;
  }
}

export default Lotto;
