import { MissionUtils } from '@woowacourse/mission-utils';
import { PRIZE_AMOUNTS, ERROR_MESSAGE } from './constants.js';
import InputError from './InputError.js';
import { vaildateNumberRange, vaildateNumberCheck } from './validateFunctions.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.result = {
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveAndBonusMatches: 0,
      sixMatches: 0,
    };
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
    for (const lottoTicket of lottoNumbers) {
      const { matchedNumbers, hasBonusNumber } = this.calculateMatchedNumbers(lottoTicket, winningNumbers, bonusNumber);
      this.updateResults(matchedNumbers, hasBonusNumber);
    }

    this.showWinningStats();
    this.calculateEarningsRate(lottoNumbers);
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

  updateResults(matchedNumbers, hasBonusNumber) {
    if (matchedNumbers === 5 && hasBonusNumber) {
      this.result.fiveAndBonusMatches++;
    } else if (matchedNumbers === 6) {
      this.result.sixMatches++;
    } else if (matchedNumbers === 5) {
      this.result.fiveMatches++;
    } else if (matchedNumbers === 4) {
      this.result.fourMatches++;
    } else if (matchedNumbers === 3) {
      this.result.threeMatches++;
    }
  }

  showWinningStats() {
    MissionUtils.Console.print(`\n당첨 통계\n---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.result.threeMatches}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.result.fourMatches}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.result.fiveMatches}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.fiveAndBonusMatches}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.result.sixMatches}개`);
  }

  calculateEarningsRate(lottoNumbers) {
    const totalPrizeAmount =
      this.result.threeMatches * PRIZE_AMOUNTS.threeMatch +
      this.result.fourMatches * PRIZE_AMOUNTS.fourMatch +
      this.result.fiveMatches * PRIZE_AMOUNTS.fiveMatch +
      this.result.fiveAndBonusMatches * PRIZE_AMOUNTS.fiveAndBonusMatch +
      this.result.sixMatches * PRIZE_AMOUNTS.sixMatch;

    const totalPurchaseAmount = lottoNumbers.length * 1000;
    const earningsRate = ((totalPrizeAmount / totalPurchaseAmount) * 100).toFixed(1);

    MissionUtils.Console.print(`총 수익률은 ${earningsRate}%입니다.\n---`);
  }
}

export default Lotto;
