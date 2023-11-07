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

    this.showWinningStats(results);
  }

  showWinningStats(results) {
    MissionUtils.Console.print(`\n당첨 통계\n---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${results['threeMatches']}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${results['fourMatches']}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${results['fiveMatches']}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results['fiveAndBonusMatches']}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${results['sixMatches']}개 \n---`);
  }
}

export default Lotto;
