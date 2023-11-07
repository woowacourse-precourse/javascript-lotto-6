import { MissionUtils } from '@woowacourse/mission-utils';
import { CONSTANT_VALUE, ERROR_MESSAGE } from './constants.js';
import InputError from './InputError.js';
import { vaildateNumberRange, vaildateNumberCheck } from './validateFunctions.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new InputError(ERROR_MESSAGE.onlySixNumber);
    } else if (new Set(numbers).size !== numbers.length) {
      throw new InputError(ERROR_MESSAGE.noDuplicate);
    }

    for (const number of numbers) {
      vaildateNumberCheck(number);
      vaildateNumberRange(number);
    }
  }

  validateBonus(bonusNumber) {
    const allNumbers = this.#numbers.concat(bonusNumber);
    const numberSet = new Set(allNumbers);

    if (numberSet.size !== allNumbers.length) {
      throw new InputError(ERROR_MESSAGE.noDuplicate);
    }
    vaildateNumberCheck(bonusNumber);
    vaildateNumberRange(bonusNumber);
  }

  printEarnings(lottoNumbers, winningNumbers, bonusNumber) {
    const results = {
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveAndBonusMatches: 0,
      sixMatches: 0,
    };

    for (const lottoTicket of lottoNumbers) {
      const { matchedNumbers, hasBonusNumber } = this.calculateMatchedNumbers(lottoTicket, winningNumbers, bonusNumber);
      this.updateResults(results, matchedNumbers, hasBonusNumber);
    }
  }

  calculateMatchedNumbers(lottoTicket, winningNumbers, bonusNumber) {
    let matchedNumbers = 0;
    let hasBonusNumber = false;

    for (const number of lottoTicket) {
      if (winningNumbers.includes(number)) {
        matchedNumbers++;
      }
      if (number === bonusNumber) {
        hasBonusNumber = true;
      }
    }

    return { matchedNumbers, hasBonusNumber };
  }

  updateResults(results, matchedNumbers, hasBonusNumber) {
    if (matchedNumbers === 5 && hasBonusNumber) {
      results['fiveAndBonusMatches']++;
    } else if (matchedNumbers === 6) {
      results['sixMatches']++;
    } else if (matchedNumbers === 5) {
      results['fiveMatches']++;
    } else if (matchedNumbers === 4) {
      results['fourMatches']++;
    } else if (matchedNumbers === 3) {
      results['threeMatches']++;
    }
  }
}

export default Lotto;
